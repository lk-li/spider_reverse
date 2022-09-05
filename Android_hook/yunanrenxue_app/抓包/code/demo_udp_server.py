# coding=utf-8
import threading
import socket


def udp_server(port=5200):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.bind(("0.0.0.0", port))
    print(f"UDP bound on port {port}...")

    while True:
        data, addr = s.recvfrom(1024)
        print("Receive from %s:%s" %(data,addr))
        if data == b"exit":
            s.sendto(b"Good bye!\n", addr)
            continue
        response=str(data)+" received from udp_server"
        s.sendto(response.encode("utf-8"), addr)


udp_server()
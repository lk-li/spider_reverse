import queue
from simpletcp.tcpserver import TCPServer
 
def echo(ip, queue, data):
    queue.put(bytes("server recv ","UTF-8")+data)
    print("echo "+data.decode("utf-8"))
 
server = TCPServer("0.0.0.0", 5100, echo)
server.run()

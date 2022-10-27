from Crypto.Cipher import AES
import base64
key = bytes.fromhex('8ce7ecd3ae9fc5ffa1f18811538f4873fcaf8268dfca1eb273e7fd27ebb8898e')
iv = bytes.fromhex('e8f768611dfb64851b1abbae')
text = bytes.fromhex('5e605f687b4e93eba3582084c5bfabf1c83798f20b1e43fa8db8bc93119ef6a6b6d712f4ad61c0722562657c4364839871c2')
cipher = AES.new(key, AES.MODE_GCM, iv)
cipher_text, tag = cipher.encrypt_and_digest(text)
enc_result = base64.b64encode(cipher_text + tag)
print(enc_result.decode())
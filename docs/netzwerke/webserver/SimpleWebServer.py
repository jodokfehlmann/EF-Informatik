import http.server
import socketserver

PORT = 8000
IP = ''

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((IP, PORT), handler) as http_service:
    print(f'Server running at http://{IP or "127.0.0.1"}:{PORT}')
    http_service.serve_forever()
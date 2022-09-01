from turtle import *

winkel = input("Was soll der winkel sein?")
winkel = int(winkel)
for i in range(30):
    forward(100)
    left(winkel)

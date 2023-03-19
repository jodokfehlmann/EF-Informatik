import time
import machine
import ssd1306
import math
from ens import ENS160 # import the device driver
import aht

i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4), freq=100000)
display = ssd1306.SSD1306_I2C(64, 48, i2c)
ens160 = ENS160(i2c, temperature=22, humidity=35)   # Initialise the ENS160 module
aht21 = aht.AHT2x(i2c, crc=True)

while True:
    # Read from the sensor
    aqi = ens160.aqi
    tvoc = ens160.tvoc
    eco2 = ens160.eco2
    hum = aht21.humidity
    temp = aht21.temperature

    # treat invalid sensor states
    if aht21.status == 0: # invalid
        aht21.reset()
        time.sleep(0.1)

    if ens160.status_validity_flag == 3: # invalid
        ens160.reset()
        time.sleep(0.1)

    display.fill(0)
    display.text('Te:{:.1f} C'.format(temp), 0, 10, 1)
    display.text('Hu:{:.1f}%'.format(hum), 0, 25, 1)
    display.text('T:{}ppb'.format(tvoc), 0, 40, 1)
    display.show()
    time.sleep(2)
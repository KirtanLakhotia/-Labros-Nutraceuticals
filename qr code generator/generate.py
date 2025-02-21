import qrcode

# Specify the link you want to generate a QR code for
link = "https://labrosnutraceuticals.com"  # Replace with your link

# Generate the QR code
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR Code (1 = smallest, 40 = largest)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level
    box_size=10,  # Size of each box in the QR code
    border=4,  # Border size
)
qr.add_data(link)
qr.make(fit=True)

# Create an image of the QR code
img = qr.make_image(fill_color="black", back_color="white")

# Save the image to a file
img.save("qrcode.png")

print("QR Code generated and saved as qrcode.png!")

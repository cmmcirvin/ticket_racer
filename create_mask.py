import cv2
import matplotlib.pyplot as plt
import numpy as np

from PIL import Image

def select_points(image):
    fig, ax = plt.subplots()
    ax.imshow(image)
    plt.title("Create a shape by clicking on the image")
    points = []
    def onclick(event):
        x, y = event.xdata, event.ydata
        points.append((x, y))
        ax.plot(x, y, 'ro')
        fig.canvas.draw()

    cid = fig.canvas.mpl_connect('button_press_event', onclick)
    plt.show(block=True)
    plt.close()
    fig.canvas.mpl_disconnect(cid)

    return points

def mask_with_shape(image, points):
    points = np.array(points, dtype=np.int32)
    mask = np.zeros(image.shape[:2], dtype=np.uint8)
    cv2.fillPoly(mask, [points], color=255)
#    masked_image = cv2.bitwise_and(image, image, mask=mask)

    return mask

if __name__ == "__main__":

    image = np.array(Image.open("aje_room.jpg"))

    points = select_points(image)
    mask = mask_with_shape(image, points)

    plt.imsave('aje_room_mask.jpg', mask)

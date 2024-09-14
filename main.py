import cv2
import matplotlib.pyplot as plt
import numpy as np
import torch

from PIL import Image
from create_mask import select_points, mask_with_shape
from diffusers import AutoPipelineForInpainting, ControlNetModel, DDIMScheduler, DiffusionPipeline, StableDiffusionControlNetInpaintPipeline, DEISMultistepScheduler
from diffusers.utils import load_image, make_image_grid

# Works with LOTR prompt
#pipeline = AutoPipelineForInpainting.from_pretrained( "kandinsky-community/kandinsky-2-2-decoder-inpaint", torch_dtype=torch.float16).to("mps")

#pipeline = AutoPipelineForInpainting.from_pretrained('lykon-models/dreamshaper-8-inpainting', torch_dtype=torch.float16, variant="fp16").to("mps")
pipeline = AutoPipelineForInpainting.from_pretrained('Lykon/dreamshaper-8-inpainting', torch_dtype=torch.float16, variant="fp16").to("mps")
pipeline.scheduler = DEISMultistepScheduler.from_config(pipeline.scheduler.config)

#pipeline = AutoPipelineForInpainting.from_pretrained( "stabilityai/stable-diffusion-2-inpainting", torch_dtype=torch.float16).to("mps")
#refiner_pipeline = AutoPipelineForInpainting.from_pretrained( "stabilityai/stable-diffusion-xl-refiner-1.0", torch_dtype=torch.float16).to("mps")

#
#pipeline = StableDiffusionControlNetInpaintPipeline.from_pretrained(
#    "stabilityai/stable-diffusion-2-inpainting",
#    controlnet=controlnet,
#    safety_checker=None,
#    torch_dtype=torch.float16
#).to("mps")
#pipeline.scheduler = DDIMScheduler.from_config(pipeline.scheduler.config)

#init_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/inpaint.png")
#mask_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/inpaint_mask.png")
#control_image = cv2.Canny(np.array(init_image), 100, 200)
#plt.imsave('hf_test_control.jpg', control_image)
#control_image = Image.open("hf_test_control.jpg")

image = np.array(Image.open("egg_room.jpg"))
points = select_points(image)
mask = mask_with_shape(image, points)
plt.imsave('egg_room_mask.jpg', mask)
init_image = load_image("./egg_room.jpg")
mask_image = load_image("./egg_room_mask.jpg")

#prompt = "a black cat with glowing eyes, cute, adorable, disney, pixar, highly detailed, 8k"
prompt = "a large potted plant with green leaves, realistic, disney, pixar, highly detailed, 8k"
#prompt = "a lord of the rings style desk mat, realistic, lord of the rings, sauron, eye of sauron"
negative_prompt = "bad anatomy, deformed, ugly, disfigured"

image = pipeline(prompt=prompt, negative_prompt=negative_prompt, height=512, width=512, image=init_image, mask_image=mask_image).images[0]
#refined_image = refiner_pipeline(prompt=prompt, negative_prompt=negative_prompt, image=image, mask_image=mask_image).images[0]
#make_image_grid([init_image, mask_image, image], rows=1, cols=3)

print("hi")

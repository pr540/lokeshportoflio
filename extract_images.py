import fitz

doc = fitz.open("Lokesh_Resume (1).pdf")
for i in range(len(doc)):
    page = doc[i]
    images = page.get_images(full=True)
    print(f"Page {i+1} has {len(images)} images")
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        with open(f"page{i+1}_img{img_index+1}.png", "wb") as f:
            f.write(image_bytes)

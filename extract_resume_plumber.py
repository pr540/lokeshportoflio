import pdfplumber

with pdfplumber.open("Lokesh_Resume (1).pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        print(f"--- Page {i+1} ---")
        text = page.extract_text()
        print(text)

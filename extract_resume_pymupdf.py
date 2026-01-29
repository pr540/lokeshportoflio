import fitz

doc = fitz.open("Lokesh_Resume (1).pdf")
for page in doc:
    print(f"--- Page {page.number+1} ---")
    words = page.get_text("words")
    for w in words:
        print(w[4], end=" ")
    print("\n")

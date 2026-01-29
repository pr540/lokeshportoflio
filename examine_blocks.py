from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer, LTChar

for page_layout in extract_pages("Lokesh_Resume (1).pdf"):
    print(f"--- Page {page_layout.pageid} ---")
    for element in page_layout:
        if isinstance(element, LTTextContainer):
            print(f"Block: {element.get_text().strip()}")
        # Check for individual characters if needed

import re

with open("Lokesh_Resume (1).pdf", "rb") as f:
    data = f.read()

# Find strings of length 4 or more that look like text
strings = re.findall(rb"[a-zA-Z0-9\s:,.+-]{4,}", data)
for s in strings:
    print(s.decode('ascii', errors='ignore'))

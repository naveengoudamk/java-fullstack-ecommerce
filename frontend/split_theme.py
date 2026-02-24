import os

with open('/Users/naveennavi/Desktop/projects/ecommerce-web-application/frontend/style.css', 'r') as f:
    lines = f.readlines()

light_css = lines[:1381]
dark_css = lines[1381:]

with open('/Users/naveennavi/Desktop/projects/ecommerce-web-application/frontend/style.css', 'w') as f:
    f.writelines(light_css)

with open('/Users/naveennavi/Desktop/projects/ecommerce-web-application/frontend/dark-theme.css', 'w') as f:
    f.writelines(dark_css)

print("Split completed successfully.")

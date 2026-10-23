import sys
import subprocess
import tkinter as tk
from tkinter import filedialog


def run_code():
    # 1. Clear previous output
    output_area.delete("1.0", tk.END)

    # 2. Save the current text to a temporary script file
    with open("temp_script.py", "w") as f:
        f.write(editor.get("1.0", tk.END))

    # 3. Use subprocess to run the code securely outside the UI thread
    process = subprocess.Popen(
        [sys.executable, "temp_script.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    stdout, stderr = process.communicate()

    # 4. Return stdout or errors back to the screen
    output_area.insert(tk.END, stdout)
    if stderr:
        output_area.insert(tk.END, f"\nERRORS:\n{stderr}")


# Setup the Tkinter GUI window
root = tk.Tk()
root.title("My Prototype IDE")

# Text layout for writing code
editor = tk.Text(root, height=20, width=80)
editor.pack()

# Run Button
run_btn = tk.Button(root, text="Run Code", command=run_code)
run_btn.pack()

# Output Display panel
output_area = tk.Text(root, height=10, width=80, bg="black", fg="white")
output_area.pack()

root.mainloop()

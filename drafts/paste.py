import numpy as np
import matplotlib.pyplot as plt

# ==========================================
# 1. SETUP DATA AND PARAMETERS
# ==========================================
# Define slopes (k) and labels for y = k*x
lines_data = [
    {"k": 0.5, "label": "y = 0.5x", "color": "blue"},
    {"k": 1.0, "label": "y = 1.0x", "color": "green"},
    {"k": 2.0, "label": "y = 2.0x", "color": "orange"},
    {"k": -0.7, "label": "y = -0.7x", "color": "purple"}
]

# Viewport Limits (X and Y ranges)
X_MIN, X_MAX = -10, 10
Y_MIN, Y_MAX = -10, 10

# Custom Graduations (Ticks)
X_TICKS = np.arange(-10, 11, 2)
Y_TICKS = np.arange(-10, 11, 2)

# ==========================================
# 2. INITIALIZE PLOT
# ==========================================
fig, ax = plt.subplots(figsize=(10, 6))
ax.set_title("Interactive Graph: Move mouse to see y = mouse_y intersections", fontsize=12)

# Apply Viewport Limits
ax.set_xlim(X_MIN, X_MAX)
ax.set_ylim(Y_MIN, Y_MAX)

# Apply Custom Graduations
ax.set_xticks(X_TICKS)
ax.set_yticks(Y_TICKS)
ax.grid(True, which='both', linestyle='--', alpha=0.5)

# Add static X and Y axis lines at the origin
ax.axhline(0, color='black', linewidth=1.2)
ax.axvline(0, color='black', linewidth=1.2)

# Plot the static lines y = k*x
x_vals = np.linspace(X_MIN, X_MAX, 400)
for line in lines_data:
    y_vals = line["k"] * x_vals
    ax.plot(x_vals, y_vals, label=line["label"], color=line["color"], lw=2)

ax.legend(loc="upper left")

# ==========================================
# 3. INTERACTIVE ELEMENTS (Dynamic)
# ==========================================
# Horizontal tracking line for the mouse y-position
hover_line = ax.axhline(color='red', linestyle=':', linewidth=1.5, visible=False)

# Scatter plot for intersection dots
intersection_dots = ax.scatter([], [], color='red', s=50, zorder=5, visible=False)

# Text box to list all intersection coordinates
text_box = ax.text(
    0.02, 0.02, '', 
    transform=ax.transAxes, 
    bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'),
    fontsize=9,
    verticalalignment='bottom'
)

# ==========================================
# 4. HOVER EVENT HANDLER
# ==========================================
def on_mouse_move(event):
    # Check if the mouse is inside the graph axes
    if event.inaxes != ax:
        hover_line.set_visible(False)
        intersection_dots.set_visible(False)
        text_box.set_visible(False)
        fig.canvas.draw_idle()
        return

    # Get the current mouse Y position
    mouse_y = event.ydata

    # Update the horizontal tracking line position
    hover_line.set_ydata([mouse_y])
    hover_line.set_visible(True)

    intersect_x = []
    intersect_y = []
    text_lines = [f"Mouse Y = {mouse_y:.2f}", "Intersections (x, y):"]

    # Calculate intersections dynamically for each line
    for line in lines_data:
        k = line["k"]
        
        # Avoid division by zero if slope k is exactly 0
        if k != 0:
            x_intersect = mouse_y / k
            
            # Only track if the intersection falls within our visible viewport
            if X_MIN <= x_intersect <= X_MAX:
                intersect_x.append(x_intersect)
                intersect_y.append(mouse_y)
                text_lines.append(f"  {line['label']}: ({x_intersect:.2f}, {mouse_y:.2f})")
        elif mouse_y == 0:
            text_lines.append(f"  {line['label']}: Infinite intersections (y=0)")

    # Update intersection dots
    if intersect_x:
        # Stack coordinates for scatter plot
        intersection_dots.set_offsets(np.c_[intersect_x, intersect_y])
        intersection_dots.set_visible(True)
    else:
        intersection_dots.set_visible(False)

    # Update the text box string
    text_box.set_text("\n".join(text_lines))
    text_box.set_visible(True)

    # Redraw the canvas smoothly
    fig.canvas.draw_idle()

# Connect the hover event listener to the figure
fig.canvas.mpl_connect('motion_notify_event', on_mouse_move)

# Display the interactive window
plt.show()

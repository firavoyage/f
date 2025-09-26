// component-library.js
(function (voyage) {
  const { h, p, e, r } = voyage;

  // Theme and styling utilities
  const theme = {
    colors: {
      primary: "#3b82f6",
      secondary: "#6b7280",
      success: "#10b981",
      warning: "#f59e0b",
      danger: "#ef4444",
      light: "#f8fafc",
      dark: "#1f2937",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    borderRadius: "0.375rem",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  };

  // Utility functions
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const styleObject = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        const kebabKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        acc[kebabKey] = value;
      }
      return acc;
    }, {});
  };

  // Base Button Component
  const Button = (props, ...children) => {
    const {
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      onClick,
      class: className,
      ...restProps
    } = props;

    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: theme.borderRadius,
      fontWeight: "600",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s ease-in-out",
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyles = {
      sm: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: "0.875rem",
      },
      md: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: "1rem",
      },
      lg: {
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: "1.125rem",
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: theme.colors.primary,
        color: "white",
        "&:hover": !disabled && { backgroundColor: "#2563eb" },
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
        color: "white",
        "&:hover": !disabled && { backgroundColor: "#4b5563" },
      },
      danger: {
        backgroundColor: theme.colors.danger,
        color: "white",
        "&:hover": !disabled && { backgroundColor: "#dc2626" },
      },
      outline: {
        backgroundColor: "transparent",
        color: theme.colors.primary,
        border: `2px solid ${theme.colors.primary}`,
        "&:hover": !disabled && {
          backgroundColor: theme.colors.primary,
          color: "white",
        },
      },
    };

    const styles = {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...(variantStyles[variant]["&:hover"] && {
        ":hover": variantStyles[variant]["&:hover"],
      }),
    };

    delete styles["&:hover"];

    return h(
      "button",
      {
        ...restProps,
        disabled: disabled || loading,
        onClick: disabled || loading ? undefined : onClick,
        class: cn("btn", `btn-${variant}`, `btn-${size}`, className),
        style: styleObject(styles),
      },
      loading ? h(Spinner, { size: "sm" }) : null,
      ...children
    );
  };

  // Input Component
  const Input = (props) => {
    const { label, error, helperText, size = "md", ...inputProps } = props;

    const sizeStyles = {
      sm: { padding: theme.spacing.xs, fontSize: "0.875rem" },
      md: { padding: theme.spacing.sm, fontSize: "1rem" },
      lg: { padding: theme.spacing.md, fontSize: "1.125rem" },
    };

    return h(
      "div",
      { class: "input-wrapper" },
      label &&
        h(
          "label",
          {
            class: "input-label",
            style: styleObject({
              display: "block",
              marginBottom: theme.spacing.xs,
              fontWeight: "500",
            }),
          },
          label
        ),
      h("input", {
        ...inputProps,
        class: cn("input", error && "input-error"),
        style: styleObject({
          width: "100%",
          border: `1px solid ${error ? theme.colors.danger : "#d1d5db"}`,
          borderRadius: theme.borderRadius,
          ...sizeStyles[size],
          "&:focus": {
            outline: "none",
            borderColor: error ? theme.colors.danger : theme.colors.primary,
            boxShadow: `0 0 0 3px ${
              error ? theme.colors.danger + "40" : theme.colors.primary + "40"
            }`,
          },
        }),
      }),
      (error || helperText) &&
        h(
          "div",
          {
            class: cn("input-message", error && "text-danger"),
            style: styleObject({
              fontSize: "0.875rem",
              marginTop: theme.spacing.xs,
              color: error ? theme.colors.danger : theme.colors.secondary,
            }),
          },
          error || helperText
        )
    );
  };

  // Card Component
  const Card = (props, ...children) => {
    const { class: className, padding = "md", ...restProps } = props;

    const paddingStyles = {
      sm: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
    };

    return h(
      "div",
      {
        ...restProps,
        class: cn("card", className),
        style: styleObject({
          backgroundColor: "white",
          borderRadius: theme.borderRadius,
          boxShadow: theme.shadow,
          padding: paddingStyles[padding],
        }),
      },
      ...children
    );
  };

  // Modal Component
  const Modal = (props, ...children) => {
    const { isOpen, onClose, title, size = "md", ...restProps } = props;

    const sizeStyles = {
      sm: { maxWidth: "400px" },
      md: { maxWidth: "600px" },
      lg: { maxWidth: "800px" },
      full: { maxWidth: "100%", margin: theme.spacing.md },
    };

    if (!isOpen) return null;

    return h(
      "div",
      {
        class: "modal-overlay",
        style: styleObject({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }),
      },
      h(
        "div",
        {
          class: "modal-content",
          style: styleObject({
            backgroundColor: "white",
            borderRadius: theme.borderRadius,
            width: "90%",
            ...sizeStyles[size],
            maxHeight: "90vh",
            overflow: "auto",
          }),
        },
        h(
          "div",
          {
            class: "modal-header",
            style: styleObject({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: theme.spacing.md,
              borderBottom: "1px solid #e5e7eb",
            }),
          },
          h(
            "h3",
            {
              style: styleObject({ margin: 0 }),
            },
            title
          ),
          h(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: onClose,
              style: styleObject({
                border: "none",
                fontSize: "1.5rem",
                padding: 0,
              }),
            },
            "×"
          )
        ),
        h(
          "div",
          {
            class: "modal-body",
            style: styleObject({ padding: theme.spacing.md }),
          },
          ...children
        )
      )
    );
  };

  // Spinner Component
  const Spinner = (props) => {
    const { size = "md", color = "currentColor" } = props;

    const sizeStyles = {
      sm: { width: "1rem", height: "1rem" },
      md: { width: "1.5rem", height: "1.5rem" },
      lg: { width: "2rem", height: "2rem" },
    };

    return h("div", {
      class: "spinner",
      style: styleObject({
        ...sizeStyles[size],
        border: "2px solid transparent",
        borderTop: `2px solid ${color}`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }),
    });
  };

  // Tabs Component
  const Tabs = (props, ...children) => {
    const activeTab = p(props.activeTab || 0);

    return h(
      "div",
      { class: "tabs" },
      h(
        "div",
        {
          class: "tabs-header",
          style: styleObject({
            display: "flex",
            borderBottom: "2px solid #e5e7eb",
          }),
        },
        ...props.tabs.map((tab, index) =>
          h(
            "button",
            {
              class: cn("tab", activeTab() === index && "tab-active"),
              onClick: () => activeTab(index),
              style: styleObject({
                padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                border: "none",
                backgroundColor: "transparent",
                borderBottom:
                  activeTab() === index
                    ? `2px solid ${theme.colors.primary}`
                    : "2px solid transparent",
                color:
                  activeTab() === index
                    ? theme.colors.primary
                    : theme.colors.secondary,
                cursor: "pointer",
                marginBottom: "-2px",
              }),
            },
            tab
          )
        )
      ),
      h(
        "div",
        {
          class: "tabs-content",
          style: styleObject({ padding: theme.spacing.md }),
        },
        children[activeTab()]
      )
    );
  };

  // Alert Component
  const Alert = (props, ...children) => {
    const { variant = "info", dismissible = false, ...restProps } = props;

    const isVisible = p(true);

    if (!isVisible()) return null;

    const variantStyles = {
      info: {
        backgroundColor: "#dbeafe",
        color: "#1e40af",
        border: `1px solid #93c5fd`,
      },
      success: {
        backgroundColor: "#d1fae5",
        color: "#065f46",
        border: `1px solid #a7f3d0`,
      },
      warning: {
        backgroundColor: "#fef3c7",
        color: "#92400e",
        border: `1px solid #fcd34d`,
      },
      danger: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        border: `1px solid #fca5a5`,
      },
    };

    return h(
      "div",
      {
        ...restProps,
        class: cn("alert", `alert-${variant}`),
        style: styleObject({
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius,
          ...variantStyles[variant],
        }),
      },
      ...children,
      dismissible &&
        h(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => isVisible(false),
            style: styleObject({
              marginLeft: "auto",
              border: "none",
              float: "right",
            }),
          },
          "×"
        )
    );
  };

  // Dropdown Component
  const Dropdown = (props, ...children) => {
    const isOpen = p(false);
    const selectedOption = p(props.value || null);

    e(() => {
      const handleClick = (event) => {
        if (!event.target.closest(".dropdown")) {
          isOpen(false);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, [isOpen]);

    return h(
      "div",
      {
        class: "dropdown",
        style: styleObject({ position: "relative", display: "inline-block" }),
      },
      h(
        Button,
        {
          variant: props.variant,
          size: props.size,
          onClick: () => isOpen(!isOpen()),
          style: styleObject({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: "150px",
          }),
        },
        selectedOption()
          ? props.options.find((opt) => opt.value === selectedOption())?.label
          : props.placeholder || "Select...",
        h("span", { style: styleObject({ marginLeft: theme.spacing.sm }) }, "▼")
      ),
      isOpen() &&
        h(
          "div",
          {
            class: "dropdown-menu",
            style: styleObject({
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: `1px solid #d1d5db`,
              borderRadius: theme.borderRadius,
              boxShadow: theme.shadow,
              zIndex: 100,
              maxHeight: "200px",
              overflow: "auto",
            }),
          },
          ...props.options.map((option) =>
            h(
              "button",
              {
                class: cn(
                  "dropdown-item",
                  selectedOption() === option.value && "dropdown-item-active"
                ),
                onClick: () => {
                  selectedOption(option.value);
                  isOpen(false);
                  props.onChange && props.onChange(option.value);
                },
                style: styleObject({
                  width: "100%",
                  padding: theme.spacing.sm,
                  border: "none",
                  backgroundColor:
                    selectedOption() === option.value
                      ? theme.colors.primary
                      : "transparent",
                  color:
                    selectedOption() === option.value ? "white" : "inherit",
                  textAlign: "left",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor:
                      selectedOption() === option.value
                        ? theme.colors.primary
                        : "#f3f4f6",
                  },
                }),
              },
              option.label
            )
          )
        )
    );
  };

  // Export the component library
  window.ComponentLibrary = {
    Button,
    Input,
    Card,
    Modal,
    Spinner,
    Tabs,
    Alert,
    Dropdown,
    theme,
    cn,
    styleObject,
  };
})(window.voyage);

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .btn:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    .input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }
    
    .modal-overlay {
        animation: fadeIn 0.2s ease-in-out;
    }
    
    .modal-content {
        animation: slideIn 0.2s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

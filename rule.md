# Styling Guidelines - Tailwind CSS Standard

Always use Tailwind CSS classes instead of React inline `style` attributes to resolve style issues and maintain clean, unified UI layouts.

## Rules

1. **No Inline React Styles**:
   - Do **NOT** use `style={{ ... }}` attributes on HTML elements or React components.
   - All styles must be declared via Tailwind classes in `className`.

2. **Arbitrary Values**:
   - If a layout requires specific pixel measurements, custom fonts, or custom gradients not covered by standard Tailwind classes, leverage Tailwind's arbitrary value brackets syntax: `[...]`.
   - Examples: `h-[309px]`, `gap-[15.08px]`, `text-[26.8px]`, `font-['Cal_Sans']`, `bg-[linear-gradient(180deg,rgba(69,118,255,0)_0%,#4576FF_71.16%)]`.

---

## Examples (Before vs After)

### ❌ Incorrect (Inline Styles)
```tsx
<div 
  className="flex flex-col justify-center items-center"
  style={{ gap: "15.08px" }}
>
  <span 
    style={{
      fontFamily: "'Cal Sans', var(--font-sans)",
      fontWeight: 400,
      fontSize: "48px",
      lineHeight: "88%",
      letterSpacing: "0em",
      textAlign: "center"
    }}
  >
    CFA Levels
  </span>
  <span 
    style={{
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "26.8px"
    }}
  >
    I, II & III Covered
  </span>
</div>
```

###  Correct (Tailwind Utility Classes)
```tsx
<div className="flex flex-col justify-center items-center gap-[15.08px]">
  <span className="font-['Cal_Sans'] font-normal text-[48px] leading-[88%] tracking-normal text-center">
    CFA Levels
  </span>
  <span className="font-sans font-normal text-[26.8px] leading-[100%] tracking-[-0.03em] text-center text-blue-100/90">
    I, II & III Covered
  </span>
</div>
```

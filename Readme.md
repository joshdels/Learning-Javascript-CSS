# 📘 CSS Basics

## 1. Selectors
- **Element selector** → `p { ... }`  
- **Class selector** → `.classname { ... }`  
- **ID selector** → `#idname { ... }`  
- **Universal selector** → `* { ... }`  
- **Attribute selector** → `input[type="text"] { ... }`  

**Combinators:**  
- Descendant → `div p`  
- Child → `div > p`  
- Adjacent sibling → `h1 + p`  
- General sibling → `h1 ~ p`  

**Pseudo-classes:**  
- `:first-child`, `:last-child`  
- `:nth-child(n)`, `:nth-of-type(n)`  
- `:hover`, `:active`, `:focus`, `:visited`  

**Pseudo-elements:**  
- `::before`, `::after`  
- `::first-letter`, `::first-line`  

---

## 2. Text & Typography
- `font-family`  
- `font-size`, `line-height`  
- `font-weight`, `font-style`  
- `text-transform: uppercase | lowercase | capitalize`  
- `text-align: left | center | right | justify`  
- `text-decoration: underline | none | overline`  
- `letter-spacing`, `word-spacing`  

---

## 3. Colors & Backgrounds
- `color` → text color  
- `background-color`  
- `background-image: url("...")`  
- `background-repeat: no-repeat | repeat-x | repeat-y`  
- `background-position: center | top | left right`  
- `background-size: cover | contain`  
- `background-attachment: fixed | scroll`  
- Gradients → `linear-gradient(...)`, `radial-gradient(...)`  

---

## 4. The Box Model
- `margin` → space outside  
- `padding` → space inside  
- `border: 2px solid black`  
- `border-radius` → rounded corners  
- `box-sizing: content-box | border-box`  

**Box Shadows:**  
```css
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
```

---

## 5. Layout & Display
- **Display types:** `block`, `inline`, `inline-block`, `flex`, `grid`, `none`

**Positioning:**
- `static` (default)
- `relative` (offset from normal flow)
- `absolute` (relative to nearest positioned parent)
- `fixed` (relative to viewport)
- `sticky` (switches between relative/fixed based on scroll)
- **Z-index** → stacking order

---

## 6. Flexbox
```css
display: flex;
justify-content: center | space-between | space-around | flex-start | flex-end;
align-items: center | flex-start | flex-end | stretch;
flex-direction: row | column;
flex-wrap: wrap | nowrap;
```

**Child properties:**
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `align-self`

---

## 7. Grid
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto 200px auto;
gap: 20px;
```

**Child positioning:**
- `grid-column: 1 / 3`
- `grid-row: 2 / 4`
- `align-self: center`
- `justify-self: end`

---

## 8. Sizing Units
- **Absolute** → `px`, `pt`
- **Relative** → `%`, `em`, `rem`, `vh`, `vw`, `min()`, `max()`
- `auto` → lets browser decide

---

## 9. Transitions & Animations
**Transitions:**
```css
transition: all 0.3s ease-in-out;
```

**Animations:**
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.box {
  animation: bounce 1s infinite;
}
```

---

## 10. Responsive Design
**Media queries:**
```css
@media screen and (max-width: 768px) {
  body { font-size: 14px; }
}
```

- Units: `%`, `em`, `rem`, `vh`, `vw`
- Mobile-first vs Desktop-first

---

## 11. Miscellaneous & Utilities
- `cursor: pointer | not-allowed`
- `overflow: hidden | scroll | auto`
- `opacity: 0.5`
- `clip-path` (shapes)
- `object-fit: cover | contain` (for images)
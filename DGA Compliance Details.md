# Platforms Code — Foundations Specification

## 1. Color System

Color usage must communicate meaning, hierarchy, and state.
All interfaces must use official palette tokens only.

---

## 1.1 Neutral Palette

| Token    | Hex     |
| -------- | ------- |
| Gray 25  | #FCFCFD |
| Gray 50  | #F9FAFB |
| Gray 100 | #F3F4F6 |
| Gray 200 | #E5E7EB |
| Gray 300 | #D2D6DB |
| Gray 400 | #9DA4AE |
| Gray 500 | #6C737F |
| Gray 600 | #4D5761 |
| Gray 700 | #384250 |
| Gray 800 | #1F2A37 |
| Gray 900 | #111927 |
| Gray 950 | #0D121C |

---

## 1.2 Primary Palette (Saudi Green)

| Token  | Hex     |
| ------ | ------- |
| SA 25  | #F7FDF9 |
| SA 50  | #F3FCF6 |
| SA 100 | #DFF6E7 |
| SA 200 | #B8EACB |
| SA 300 | #88D8AD |
| SA 400 | #54C08A |
| SA 500 | #25935F |
| SA 600 | #1B8354 |
| SA 700 | #166A45 |
| SA 800 | #14573A |
| SA 900 | #104631 |
| SA 950 | #092A1E |

---

## 1.3 Gold Palette

| Token    | Hex     |
| -------- | ------- |
| Gold 25  | #FFFEF7 |
| Gold 50  | #FFFEF2 |
| Gold 100 | #FFFCE6 |
| Gold 200 | #FCF3BD |
| Gold 300 | #FAE996 |
| Gold 400 | #F7D54D |
| Gold 500 | #F5BD02 |
| Gold 600 | #DBA102 |
| Gold 700 | #B87B02 |
| Gold 800 | #945C01 |
| Gold 900 | #6E3C00 |
| Gold 950 | #472400 |

---

## 1.4 Lavender Palette

| Token        | Hex     |
| ------------ | ------- |
| Lavender 25  | #FEFCFF |
| Lavender 50  | #F9F5FA |
| Lavender 100 | #F2E9F5 |
| Lavender 200 | #E1CCE8 |
| Lavender 300 | #CCADD9 |
| Lavender 400 | #A57BBA |
| Lavender 500 | #80519F |
| Lavender 600 | #6D428F |
| Lavender 700 | #532D75 |
| Lavender 800 | #3D1D5E |
| Lavender 900 | #281047 |
| Lavender 950 | #16072E |

---

## 1.5 Semantic Palettes

### Warning

| Token       | Hex     |
| ----------- | ------- |
| Warning 25  | #FFFCF5 |
| Warning 50  | #FFFAEB |
| Warning 100 | #FEF0C7 |
| Warning 200 | #FEDF89 |
| Warning 300 | #FEC84B |
| Warning 400 | #FDB022 |
| Warning 500 | #F79009 |
| Warning 600 | #DC6803 |
| Warning 700 | #B54708 |
| Warning 800 | #93370D |
| Warning 900 | #7A2E0E |
| Warning 950 | #4E1D09 |

---

### Info

| Token    | Hex     |
| -------- | ------- |
| Info 25  | #F5FAFF |
| Info 50  | #ECFDF3 |
| Info 100 | #D1E9FF |
| Info 200 | #B2DDFF |
| Info 300 | #84CAFF |
| Info 400 | #53B1FD |
| Info 500 | #2E90FA |
| Info 600 | #1570EF |
| Info 700 | #175CD3 |
| Info 800 | #1849A9 |
| Info 900 | #194185 |
| Info 950 | #102A56 |

---

### Success

| Token       | Hex     |
| ----------- | ------- |
| Success 25  | #F6FEF9 |
| Success 50  | #ECFDF3 |
| Success 100 | #DCFAE6 |
| Success 200 | #ABEFC6 |
| Success 300 | #75E0A7 |
| Success 400 | #47CD89 |
| Success 500 | #17B26A |
| Success 600 | #079455 |
| Success 700 | #067647 |
| Success 800 | #085D3A |
| Success 900 | #074D31 |
| Success 950 | #053321 |

---

### Error

| Token     | Hex     |
| --------- | ------- |
| Error 600 | #D92D20 |

---

## 1.6 Text Colors

### Dark background

Primary: #FFFFFF
Secondary: #FFFFFF (70%)
Tertiary: #FFFFFF (60%)

### Light background

Primary: #0D121C
Secondary: #384250
Tertiary: #4D5761

### Semantic text

Error: #D92D20
Warning: #DC6803
Success: #1B8354
Info: #1570EF

---

## 2. Typography

Typeface: **IBM Plex Sans**

Weights:

* Regular
* Medium
* Semibold
* Bold

### Display scale

| Token       | Size | Line Height |
| ----------- | ---- | ----------- |
| Display 2XL | 72px | 90px        |
| Display XL  | 60px | 72px        |
| Display LG  | 48px | 60px        |
| Display MD  | 36px | 44px        |
| Display SM  | 30px | 38px        |
| Display XS  | 24px | 32px        |

---

### Text scale

| Token    | Size | Line Height |
| -------- | ---- | ----------- |
| Text XL  | 20px | 30px        |
| Text LG  | 18px | 28px        |
| Text MD  | 16px | 24px        |
| Text SM  | 14px | 20px        |
| Text XS  | 12px | 18px        |
| Text 2XS | 10px | 14px        |

---

## 3. Spacing

| Token        | REM      | PX    |
| ------------ | -------- | ----- |
| spacing-none | 0        | 0     |
| spacing-xxs  | 0.125rem | 2px   |
| spacing-xs   | 0.25rem  | 4px   |
| spacing-sm   | 0.375rem | 6px   |
| spacing-md   | 0.5rem   | 8px   |
| spacing-lg   | 0.75rem  | 12px  |
| spacing-xl   | 1rem     | 16px  |
| spacing-2xl  | 1.25rem  | 20px  |
| spacing-3xl  | 1.5rem   | 24px  |
| spacing-4xl  | 2rem     | 32px  |
| spacing-5xl  | 2.5rem   | 40px  |
| spacing-6xl  | 3rem     | 48px  |
| spacing-7xl  | 5rem     | 64px  |
| spacing-8xl  | 6rem     | 80px  |
| spacing-9xl  | 7rem     | 96px  |
| spacing-10xl | 8rem     | 128px |
| spacing-11xl | 11rem    | 160px |

---

## 4. Layout

Grid:

* 12-column desktop grid
* 2-4 columns mobile/tablet

Containers:

* Mobile padding: 16px
* Desktop padding: 32px
* Max width desktop: 1280px

Breakpoints:

* Mobile: 0–599
* Tablet: 600–959
* Desktop: 960–1279
* Large: 1280+

---

## 5. Iconography

Icon system: **Hugeicons**

Sizes:

* XS: 10, 14, 16
* Small: 18, 20
* Medium: 24
* Large: 28, 32

Touch target: **44×44 px**

Accessibility:

* aria-label required for functional icons
* aria-hidden for decorative icons

---

## 6. Accessibility Rules

Contrast:

* Small text ≥ 4.5:1
* Large text ≥ 3:1
* UI components ≥ 3:1

Layout:

* Maintain logical reading order
* Minimum touch size: 44px
* Line height ≥ 1.5
* Use spacing to group content

---

## 7. Governance

Applications must:

* use official tokens
* avoid arbitrary colors
* follow spacing scale
* follow typography scale
* meet WCAG 2.1 AA

Below is the **final Elevation & Shadow section** to append to your Foundations documentation.
(Production-ready Markdown / Markdoc format.)

---

# 8. Elevation & Shadows

Elevation visually represents the distance between elements and their background.
Shadows create hierarchy, improve usability, and emphasize interactive components.

Platforms Code defines **7 shadow elevation levels**.

---

## 8.1 Shadow Tokens

All shadows use base color:

```
#101828
```

---

### Shadow XS

```
0px 1px 2px 0px rgba(16,24,40,0.05)
```

---

### Shadow SM

```
0px 1px 3px 0px rgba(16,24,40,0.10),
0px 1px 2px 0px rgba(16,24,40,0.06)
```

---

### Shadow MD

```
0px 4px 8px -2px rgba(16,24,40,0.10),
0px 2px 4px -2px rgba(16,24,40,0.06)
```

---

### Shadow LG

```
0px 12px 16px -6px rgba(16,24,40,0.08),
0px 4px 6px -2px rgba(16,24,40,0.03)
```

---

### Shadow XL

```
0px 20px 24px -4px rgba(16,24,40,0.08),
0px 8px 8px -4px rgba(16,24,40,0.03)
```

---

### Shadow 2XL

```
0px 24px 48px -12px rgba(16,24,40,0.18)
```

---

### Shadow 3XL

```
0px 32px 64px -12px rgba(16,24,40,0.14)
```

---

## 8.2 Backdrop Blur Tokens

| Token            | Blur |
| ---------------- | ---- |
| Backdrop blur SM | 8px  |
| Backdrop blur MD | 16px |
| Backdrop blur LG | 24px |
| Backdrop blur XL | 40px |

---

## 8.3 Usage Guidelines

Use elevation to:

* establish hierarchy between surfaces
* highlight modals, menus, popovers
* show interactive state changes
* indicate hover or focus elevation transitions

Avoid:

* stacking multiple high-elevation layers
* using elevation as the only state indicator
* excessive blur causing visual fatigue

---

## 8.4 Accessibility

* Maintain text contrast ≥ 4.5:1 against backgrounds
* Provide borders where depth perception is limited
* Interactive states must also change **color or outline**, not only elevation

---

## 8.5 CSS Token Example

```css
:root {
  --shadow-xs: 0 1px 2px rgba(16,24,40,0.05);
  --shadow-sm: 0 1px 3px rgba(16,24,40,0.10), 0 1px 2px rgba(16,24,40,0.06);
  --shadow-md: 0 4px 8px rgba(16,24,40,0.10), 0 2px 4px rgba(16,24,40,0.06);
  --shadow-lg: 0 12px 16px rgba(16,24,40,0.08), 0 4px 6px rgba(16,24,40,0.03);
  --shadow-xl: 0 20px 24px rgba(16,24,40,0.08), 0 8px 8px rgba(16,24,40,0.03);
  --shadow-2xl: 0 24px 48px rgba(16,24,40,0.18);
  --shadow-3xl: 0 32px 64px rgba(16,24,40,0.14);
}
```

---

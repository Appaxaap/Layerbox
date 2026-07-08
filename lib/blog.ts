export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  keywords: string[];
  content: string[][]; // Each entry is [heading, bodyHtml]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-create-css-box-shadow",
    title: "How to Create CSS Box Shadow: A Complete Guide",
    description:
      "Learn how to create CSS box shadows step by step. From basic syntax to multi-layer effects, this guide covers everything you need to craft perfect shadows for your web projects.",
    date: "2026-07-09",
    readTime: "6 min read",
    author: "Layerbox",
    keywords: [
      "how to create css box shadow",
      "css box shadow tutorial",
      "box shadow css examples",
      "css box shadow syntax",
    ],
    content: [
      [
        "What is CSS Box Shadow?",
        "The CSS <code>box-shadow</code> property lets you add shadow effects to elements. It is one of the most versatile properties in CSS, capable of creating everything from subtle depth to dramatic visual effects. A box shadow is defined by offset values, blur radius, spread radius, and color, allowing precise control over how the shadow appears.",
      ],
      [
        "Box Shadow Syntax Breakdown",
        "The standard syntax for <code>box-shadow</code> is:<br><br><code>box-shadow: offset-x offset-y blur-radius spread-radius color;</code><br><br>Each parameter controls a specific aspect of the shadow:<br><br>- <strong>offset-x</strong>: Horizontal offset. Positive values move the shadow right, negative values move it left.<br>- <strong>offset-y</strong>: Vertical offset. Positive values move the shadow down, negative values move it up.<br>- <strong>blur-radius</strong>: How soft the shadow edges are. Larger values create softer, more diffuse shadows.<br>- <strong>spread-radius</strong>: How much the shadow expands or contracts. Positive values make the shadow larger than the element.<br>- <strong>color</strong>: The shadow color, defined in hex, rgba, or any valid CSS color format.",
      ],
      [
        "How to Create a Basic Box Shadow",
        "Here is a simple box shadow with a 2px horizontal offset, 4px vertical offset, 8px blur, and dark color at 30% opacity:<br><br><code>box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);</code><br><br>This creates a shadow that sits slightly below and to the right of the element with soft edges. It is the most common starting point for UI shadows.",
      ],
      [
        "Creating Multi-Layer Shadows",
        "One of the most powerful features of <code>box-shadow</code> is the ability to stack multiple shadows on a single element. Separate each shadow with a comma:<br><br><code>box-shadow:<br>&nbsp;&nbsp;0px 2px 4px rgba(0,0,0,0.06),<br>&nbsp;&nbsp;0px 4px 8px rgba(0,0,0,0.06),<br>&nbsp;&nbsp;0px 8px 24px rgba(0,0,0,0.08),<br>&nbsp;&nbsp;0px 16px 48px rgba(0,0,0,0.06);</code><br><br>Multi-layer shadows create realistic depth by mimicking how light falls off in the real world. The first layer is tight and dark, representing close contact shadow, while subsequent layers are wider and lighter, representing ambient occlusion. Layerbox was built specifically to make creating these multi-layer stacks fast and visual.",
      ],
      [
        "Using Layerbox to Create Shadows Visually",
        "Instead of writing shadow code by hand and guessing the result, you can use Layerbox to build shadows visually. Here is how:<br><br>1. Open <a href='/editor' style='color:#E8664D'>Layerbox Editor</a><br>2. Add shadow layers using the left panel<br>3. Adjust each layer's offset, blur, spread, opacity, and color using the sliders<br>4. Preview the result in real-time on the interactive canvas<br>5. Copy the generated code in CSS, Tailwind, SCSS, JavaScript, or Flutter format<br><br>Layerbox handles all the math and syntax so you can focus on the creative decisions.",
      ],
      [
        "Common Box Shadow Examples",
        "Here are some common shadow patterns you can create:<br><br><strong>Subtle elevation:</strong><br><code>box-shadow: 0px 1px 3px rgba(0,0,0,0.08);</code><br><br><strong>Card shadow:</strong><br><code>box-shadow: 0px 2px 8px rgba(0,0,0,0.1);</code><br><br><strong>Floating element:</strong><br><code>box-shadow: 0px 8px 24px rgba(0,0,0,0.12);</code><br><br><strong>Inset shadow (inner):</strong><br><code>box-shadow: inset 0px 2px 4px rgba(0,0,0,0.06);</code><br><br>Use Layerbox to experiment with these patterns and find the perfect shadow for your design.",
      ],
    ],
  },
  {
    slug: "css-box-shadow-generator",
    title: "CSS Box Shadow Generator: Build Multi-Layer Shadows Visually",
    description:
      "A CSS box shadow generator saves hours of trial and error. Discover why visual shadow tools like Layerbox produce better results than hand-written CSS, and how multi-layer shadows create realistic depth.",
    date: "2026-07-09",
    readTime: "5 min read",
    author: "Layerbox",
    keywords: [
      "css box shadow generator",
      "box shadow generator online",
      "best box shadow generator",
      "visual shadow tool",
    ],
    content: [
      [
        "Why Use a CSS Box Shadow Generator?",
        "Hand-writing CSS box shadows is a process of trial and error. You guess values, reload the browser, tweak them, and repeat. A CSS box shadow generator eliminates this cycle by giving you immediate visual feedback. Every slider adjustment updates the preview instantly, so you can see exactly what you are building in real time.",
      ],
      [
        "The Problem with Hand-Written Shadows",
        "Most developers write box shadows by guessing. A typical approach involves starting with <code>2px 2px 4px rgba(0,0,0,0.2)</code>, then adjusting values until the shadow looks acceptable. This works for simple single-layer shadows, but breaks down when you need:<br><br>- <strong>Multi-layer depth</strong>: Realistic shadows need multiple layers working together<br>- <strong>Consistent elevation</strong>: Maintaining a cohesive shadow system across a UI<br>- <strong>Physical accuracy</strong>: Shadows should follow natural light falloff patterns<br><br>A tool like Layerbox solves all of these problems by giving you visual control over every parameter.",
      ],
      [
        "What Makes a Good Box Shadow Generator?",
        "Not all shadow generators are created equal. Here is what to look for:<br><br><strong>Real-time preview:</strong> Every parameter change should update immediately. No submit buttons or refresh delays.<br><br><strong>Multi-layer support:</strong> The ability to stack, reorder, and adjust multiple shadow layers independently.<br><br><strong>Multiple export formats:</strong> CSS is just one format. A good generator also outputs Tailwind, SCSS, JavaScript, and Flutter code.<br><br><strong>Interactive canvas:</strong> Being able to drag to pan around the element, change background colors, and test different shapes.<br><br>Layerbox checks all these boxes and more.",
      ],
      [
        "How Layerbox Improves Your Workflow",
        "Layerbox is designed to fit into a developer's workflow seamlessly:<br><br>1. Open the editor and build your shadow visually<br>2. Tweak until it looks right on the canvas<br>3. Copy the generated code in your target format<br>4. Paste directly into your project<br><br>No signup, no login, no paywall. The entire tool runs in your browser with zero backend requests. Your shadows are encoded in the URL, so you can bookmark them or share links with your team.",
      ],
      [
        "Export Formats Supported",
        "Layerbox supports exporting shadows in these formats:<br><br>- <strong>CSS</strong>: Standard <code>box-shadow</code> property<br>- <strong>Tailwind CSS</strong>: Arbitrary value syntax (<code>shadow-[...]</code>)<br>- <strong>Tailwind Config</strong>: Theme extension for your tailwind.config<br>- <strong>SCSS</strong>: Variable-based SCSS output<br>- <strong>CSS Variables</strong>: Custom property format for design systems<br>- <strong>JavaScript</strong>: React inline style objects<br>- <strong>Flutter/Dart</strong>: BoxDecoration with BoxShadow list<br><br>Each format produces production-ready, syntactically correct code.",
      ],
    ],
  },
  {
    slug: "what-is-box-shadow-in-css",
    title: "What Is Box Shadow in CSS? Everything You Need to Know",
    description:
      "Box shadow in CSS is a property that adds shadow effects to HTML elements. Learn how it works, what each parameter means, and how to use it effectively with real examples.",
    date: "2026-07-09",
    readTime: "7 min read",
    author: "Layerbox",
    keywords: [
      "what is box shadow in css",
      "box shadow css property",
      "css box shadow explained",
      "how does box shadow work",
    ],
    content: [
      [
        "What Is Box Shadow in CSS?",
        "Box shadow is a CSS property that adds shadow effects around an element's frame. It can create drop shadows, inner shadows, and even glow effects. The property accepts a comma-separated list of shadows, each defined by up to six values: offset-x, offset-y, blur-radius, spread-radius, color, and the optional <code>inset</code> keyword.<br><br>At its core, <code>box-shadow</code> creates a rectangular shadow that follows the shape of the element. For a standard block element, the shadow matches the border box. For elements with <code>border-radius</code>, the shadow curves to match.",
      ],
      [
        "Box Shadow Parameters Explained",
        "Here is what each parameter in the <code>box-shadow</code> property does:<br><br><strong>offset-x (required)</strong>: How far the shadow extends horizontally. Positive values shift the shadow to the right, negative values to the left. This creates the illusion of light coming from a specific direction.<br><br><strong>offset-y (required)</strong>: How far the shadow extends vertically. Positive values shift the shadow downward, creating the impression of light from above. This is the most important parameter for perceived elevation.<br><br><strong>blur-radius (optional)</strong>: Controls how soft or sharp the shadow edges are. A value of 0 creates a hard edge. Higher values create softer, more diffuse shadows that look more natural.<br><br><strong>spread-radius (optional)</strong>: Expands or contracts the shadow size. Positive values make the shadow larger than the element. Negative values make it smaller.<br><br><strong>color (optional)</strong>: Defines the shadow color. RGBA values are recommended for opacity control. Defaults to the current text color if omitted.<br><br><strong>inset (optional keyword)</strong>: Changes the shadow from an outer drop shadow to an inner shadow that appears inside the element's border.",
      ],
      [
        "How Box Shadow Creates Depth",
        "Shadows work by mimicking how light behaves in the real world. When an object is close to a surface, its shadow is tight and dark. As the object moves away from the surface, the shadow spreads out and becomes softer and lighter.<br><br>This is why multi-layer shadows are so effective. A realistic shadow stack looks like this:<br><br><code>box-shadow:<br>&nbsp;&nbsp;0px 1px 2px rgba(0,0,0,0.06), &nbsp;// contact shadow<br>&nbsp;&nbsp;0px 4px 8px rgba(0,0,0,0.06), &nbsp;// mid shadow<br>&nbsp;&nbsp;0px 12px 32px rgba(0,0,0,0.08); // ambient shadow</code><br><br>Each layer represents a different aspect of real-world light behavior. The contact shadow is tight and dark where the element meets the surface. The ambient shadow is wide and soft, representing the light that wraps around the object.",
      ],
      [
        "Inset vs Outset Shadows",
        "By default, <code>box-shadow</code> creates an outset shadow that sits outside the element. Adding the <code>inset</code> keyword switches the shadow to the inside of the element:<br><br><strong>Outset shadow:</strong><br><code>box-shadow: 0px 4px 8px rgba(0,0,0,0.1);</code><br><br><strong>Inset shadow:</strong><br><code>box-shadow: inset 0px 2px 4px rgba(0,0,0,0.06);</code><br><br>Inset shadows are commonly used for pressed button states, inner glows, and recessed UI elements like input fields and cards.",
      ],
      [
        "Box Shadow vs Drop Shadow",
        "While <code>box-shadow</code> applies to the element's box, CSS also provides <code>filter: drop-shadow()</code> which follows the actual shape of the element's content, including transparent parts. The key difference is:<br><br>- <strong>box-shadow</strong>: Renders a rectangular shadow on the element's border box. Supports spread, inset, and stacking multiple shadows.<br>- <strong>drop-shadow</strong>: Renders a shadow that follows the element's rendered shape, including clipped or pseudo-element content. Supports only offset, blur, and color.<br><br>For most UI elements like cards, buttons, and panels, <code>box-shadow</code> is the right choice because of its precision control.",
      ],
      [
        "Browser Support and Performance",
        "The <code>box-shadow</code> property is supported in all modern browsers and has been since Internet Explorer 9. It is hardware-accelerated on most platforms, making it performant even with multiple layers.<br><br>For the best performance, keep shadows simple on elements that animate frequently. During animations or transitions, shadows can trigger repaints. Modern browsers handle this efficiently, but using the <code>will-change</code> property on animated elements can help optimize rendering.",
      ],
    ],
  },
  {
    slug: "css-box-shadow-examples",
    title: "CSS Box Shadow Examples: 10 Beautiful Effects You Can Use Today",
    description:
      "Explore 10 beautiful CSS box shadow examples you can copy and use in your projects. From subtle UI elevations to dramatic floating effects, each example includes code and a breakdown.",
    date: "2026-07-09",
    readTime: "5 min read",
    author: "Layerbox",
    keywords: [
      "css box shadow examples",
      "box shadow effects",
      "beautiful box shadows",
      "css shadow inspiration",
    ],
    content: [
      [
        "1. Subtle UI Elevation",
        "The most common shadow pattern for cards and UI elements. It creates a gentle sense of elevation without drawing attention:<br><br><code>box-shadow: 0px 1px 3px rgba(0,0,0,0.08), 0px 1px 2px rgba(0,0,0,0.06);</code><br><br>Use this for cards, panels, and any element that sits just above the background. It is subtle enough that users will not notice it, but the interface will feel more structured.",
      ],
      [
        "2. Medium Card Shadow",
        "A moderate elevation suitable for floating cards, dropdown menus, and modals:<br><br><code>box-shadow: 0px 4px 12px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06);</code><br><br>This creates a noticeable but not dramatic lift. Good for hover states on interactive cards and elevated elements in a dashboard.",
      ],
      [
        "3. Floating Element",
        "Creates the illusion of an element hovering above the surface:<br><br><code>box-shadow: 0px 8px 24px rgba(0,0,0,0.1), 0px 4px 8px rgba(0,0,0,0.06);</code><br><br>Use this for hero sections, featured content, or any element you want to stand out. The wider ambient shadow creates the feeling of distance from the background.",
      ],
      [
        "4. Deep Floating Effect",
        "For elements that need to feel significantly elevated, like modals or tooltips:<br><br><code>box-shadow: 0px 16px 48px rgba(0,0,0,0.12), 0px 8px 16px rgba(0,0,0,0.08);</code><br><br>This four-layer stack mimics realistic depth with tight contact shadow, mid shadow, and wide ambient falloff. The multiple layers create smooth transitions between light and dark areas.",
      ],
      [
        "5. Soft Glow Effect",
        "While not a traditional shadow, adjusting color and offsets can create glow effects:<br><br><code>box-shadow: 0px 0px 20px rgba(94, 158, 136, 0.3), 0px 0px 60px rgba(94, 158, 136, 0.1);</code><br><br>Set both offsets to 0, use a colored shadow with low opacity, and increase the blur. This creates a soft colored halo around the element, useful for accent buttons or highlighted states.",
      ],
      [
        "6. Inset Pressed State",
        "Inset shadows create the appearance of a pressed or recessed element:<br><br><code>box-shadow: inset 0px 2px 4px rgba(0,0,0,0.1);</code><br><br>Use this on interactive elements like buttons in their active or pressed state. The shadow appears inside the element, making it look like it has been pushed into the surface.",
      ],
      [
        "7. Left-Side Shadow (Light from Right)",
        "By default, shadows assume light from above-left. Flip the light direction for variety:<br><br><code>box-shadow: -4px 4px 12px rgba(0,0,0,0.08), -2px 2px 4px rgba(0,0,0,0.06);</code><br><br>Negative x-offset values move the shadow to the left, simulating light coming from the right side of the screen.",
      ],
      [
        "8. Spread Shadow",
        "Using the spread parameter creates a shadow that extends beyond the element:<br><br><code>box-shadow: 0px 0px 0px 4px rgba(94, 158, 136, 0.15);</code><br><br>A spread shadow with 0 offset and 0 blur creates an outline effect. This is useful for focus indicators, selection states, and decorative borders that do not affect layout.",
      ],
      [
        "9. Double-Tone Shadow",
        "Stack shadows with different colors for a more dynamic effect:<br><br><code>box-shadow: 0px 4px 12px rgba(0,0,0,0.1), 0px 2px 4px rgba(94, 158, 136, 0.08);</code><br><br>The second layer uses a tinted color that adds a subtle hue to the shadow. This works well when you want shadows to pick up accent colors from your design system.",
      ],
      [
        "10. Multi-Layer Realistic Shadow",
        "The most realistic shadow pattern uses four or more layers with carefully tuned values:<br><br><code>box-shadow:<br>&nbsp;&nbsp;0px 1px 2px rgba(0,0,0,0.06),<br>&nbsp;&nbsp;0px 4px 8px rgba(0,0,0,0.06),<br>&nbsp;&nbsp;0px 12px 24px rgba(0,0,0,0.08),<br>&nbsp;&nbsp;0px 24px 48px rgba(0,0,0,0.06);</code><br><br>This is the pattern Layerbox generates when you use the depth meter or preset library. Each layer handles a different aspect of physical light behavior, creating a shadow that looks natural and polished.",
      ],
    ],
  },
];

# Experimental Dark Portfolio Design

## Objective

Rework the existing Sun Wang portfolio visual layer into an experimental dark portfolio for an AI product experience designer. The site should borrow the cinematic mood, black/white contrast, image-led motion portfolio feeling, editorial typography, and restrained rhythm of pacomepertant.com without copying its structure, content flow, sound entry, menu behavior, showreel language, or project layout.

## Design Principles

- Keep the existing portfolio information architecture and Chinese-first content logic.
- Make the first impression black, cinematic, spatial, and restrained.
- Use type as a visual object: huge English display lines, precise Chinese support text, small metadata.
- Replace ordinary project cards with motion-reel image windows that feel like paused film frames.
- Add GSAP motion for entrance, scroll rhythm, pointer parallax, and hover reveal, but keep text readable.
- Use low-saturation silver, graphite, and muted green accents. Avoid cheap neon, SaaS blue, and generic template sections.

## Hero

- Near-black full viewport.
- Left/lower-left editorial title:
  - SUN WANG
  - AI PRODUCT DESIGNER
  - Chinese support line for the default locale.
- Center/right low-poly digital core representing AI, design systems, interface modules, and frontend collaboration.
- The core should rotate slowly and react subtly to pointer movement.
- Add faint particles, scanlines, film grain, corner marks, and spatial guide lines without becoming decorative clutter.

## Selected Work

- No standard grid or text-only list.
- Each project is a large horizontal media window with generous vertical rhythm.
- Default state should show image, index, compact metadata, and minimal text.
- Hover state:
  - image scale around 1.04
  - tilt within 2 degrees
  - title and CTA slide/reveal
  - large ghost keywords appear in the background
  - a cursor-follow label shows the case-study action on desktop
- Project content remains tied to the real project dataset.

## Success Criteria

- Homepage immediately reads as a premium experimental portfolio rather than a corporate product site.
- Chinese remains the default and primary content mode.
- Project images become the main visual rhythm of the work section.
- GSAP enhances the structure rather than covering for weak content.
- Desktop and mobile screenshots are visually coherent with no unreadable overlaps.

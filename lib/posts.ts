From 2cdd91c70ac3e9a7c4ebda3bf1715f0b9ac2648a Mon Sep 17 00:00:00 2001
From: LeRenyae Watkins <lerenyae@users.noreply.github.com>
Date: Tue, 21 Apr 2026 17:12:02 +0000
Subject: [PATCH] Add four new dispatches for 30-day launch push

- The Next Thirty Days (Publication Update, Apr 21)
- Why Baltimore (Behind the Scenes, Apr 21)
- Five Fights (Behind the Scenes, Apr 21)
- The Multi-POV Machine (Thematic Essay, Apr 21)

Preserves existing three posts below the new entries.
---
 lib/posts.ts | 140 ++++++++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 139 insertions(+), 1 deletion(-)

diff --git a/lib/posts.ts b/lib/posts.ts
index da30cf1..df59322 100644
--- a/lib/posts.ts
+++ b/lib/posts.ts
@@ -1,6 +1,144 @@
 export type Post = { slug: string; title: string; category: string; date: string; excerpt: string; content: string };
 
 export const posts: Post[] = [
+  {
+    slug: "the-next-thirty-days",
+    title: "The Next Thirty Days",
+    category: "Publication Update",
+    date: "April 21, 2026",
+    excerpt: "Manuscript is done. Cover is with the artist. The work now is different — less writing, more showing up. Baltimore soon.",
+    content: `Fifty-four chapters. Done.
+
+Not "close to done." Not "one more pass." Done. The manuscript that started as a question — what does a legal thriller look like when the system is the protagonist — closed its last page earlier this month. The cover is with the artist. Page dimensions are being sorted. Print is next.
+
+That part, the writing part, was the long fight. I don't want to undersell it. Ninety-three thousand words of a novel that refused to settle for the easy version of itself. Chapters that got rewritten four, five times because the first attempts reached for the thriller move instead of the civic one. A main character who almost became a hero until the book made him smaller and more honest. Every locked scene earned the lock. That's the only part I'll say for now.
+
+The next thirty days is a different fight.
+
+Writing is quiet. Publishing is not. This stretch before launch is about showing up — posting more, turning up at book events around the city, and yes, a trip to Baltimore is on the table before the official release. The novel is set there. Walking those blocks with the manuscript finished, seeing the courthouse I've been writing around for eighteen months, standing on Fayette and Calvert where real things happen that my fiction borrowed — that's earned.
+
+Perfection is the fight that never ends. I've had to make peace with finishing instead of polishing. A book that sits in a drawer waiting to be perfect isn't a book. It's a manuscript. The difference is the reader.
+
+Contempt releases Father's Day — June 21, 2026. Two months out.
+
+More posts are coming. Process notes, field reports from events, dispatches from Baltimore if the trip happens. This page is becoming a blog — actually updated, actually current, actually moving.
+
+Pull up a chair.
+
+— LeRenyae`,
+  },
+  {
+    slug: "why-baltimore",
+    title: "Why Baltimore",
+    category: "Behind the Scenes",
+    date: "April 21, 2026",
+    excerpt: "I've never set foot in Baltimore. Here are the five things that convinced me it was the only city the book could live in.",
+    content: `I've never set foot in Baltimore.
+
+Before I lose half the readers, let me finish the sentence. I've never set foot in Baltimore, and I still chose it as the setting for Contempt — a legal thriller about jurisdiction, inheritance, and the machinery of a city that processes people. Knowing I'd have to earn every detail. Knowing I'd be writing toward a reader who could catch me on a wrong street name. I chose it anyway.
+
+Here's why.
+
+## 1. The Wire built a map no other American city has.
+
+Anyone writing modern civic fiction is writing in the shadow of David Simon's work. The Wire, The Corner, Homicide — the intellectual infrastructure is already there. A reader who picks up a Baltimore novel arrives with a shared vocabulary: the docks, the towers, City Hall, the Eastside, the Westside. I don't have to build the world from scratch. I get to write inside it. That's a gift most cities don't give a novelist. And the writers who came before did the work of making it one.
+
+## 2. The layers stack in a way fiction needs.
+
+Baltimore has federal courts, state courts, city courts, county courts — all of them touching, all of them fighting for jurisdiction over the same square mile. You have harbor, warehouse, rowhouse, marble courthouse, and suburban strip mall all within a twenty-minute drive. The vertical density of the social hierarchy is insane. A defense attorney can drive from chambers downtown to a client in Sandtown in the same morning he takes a meeting in Mt. Vernon. No other mid-size American city has that range packed so tight. Fiction lives in compression. Baltimore is compressed.
+
+## 3. The machine is visible.
+
+Some cities hide how they work. Baltimore doesn't. The deals, the docket, the patronage, the old families, the development money, the nonprofit-industrial complex — it's all out there, documented by decades of local journalism. If I'm writing about a system, I want a city where the system still casts a shadow. Baltimore casts one. Long.
+
+## 4. Adaptation potential.
+
+I'll say the obvious part out loud. I'm writing for the page. But Contempt has a screen somewhere in its future, and Baltimore is one of the most adaptation-ready cities in American letters. A TV audience already knows the aerial shot of the harbor. A reader already knows what a Baltimore courthouse feels like even if they've never seen one. The setting carries its own atmosphere, which means whoever adapts it eventually — if they do — inherits half the world-building for free. That matters. Writing a novel is an eighteen-month investment. I want the asset to travel.
+
+## 5. Baltimore hasn't been written in a while.
+
+The Wire aired twenty years ago. Simon is still working, and so are others, but the literary pipeline of new Baltimore fiction has thinned. There's a hunger. A reader who loved that era of American storytelling and hasn't seen a novel-length Baltimore thriller in too long. Contempt isn't filling that gap alone, but it's walking into a room where people are still hungry for the voice. Timing matters.
+
+## And one more — the trip is coming.
+
+I'll set foot in Baltimore before the book releases. Walking those blocks with the manuscript finished, standing in front of the courthouse I've been writing around, checking the details the research couldn't deliver. That's earned, and that's the closing loop. When it happens, you'll read about it here.
+
+— LeRenyae`,
+  },
+  {
+    slug: "five-fights",
+    title: "Five Fights",
+    category: "Behind the Scenes",
+    date: "April 21, 2026",
+    excerpt: "Every novel has its demons. These were mine. The five hardest fights in writing Contempt — and what each one taught me.",
+    content: `Every novel has its demons. These were mine.
+
+## 1. Writing a city I've never set foot in.
+
+Contempt is a Baltimore novel. Every block, every jurisdictional line, every courthouse corridor. And I've never been. Not once. Eighteen months of research did the work — maps, blueprints, court records, old newspapers, Google Street View pulled down to pedestrian level, hours of The Wire watched with the geography in mind, hours of local journalism read like a second job. The fight wasn't getting the facts right. It was getting the feel right — the humidity off the harbor, the way a cop stands on Gay Street versus the way he stands in Fells Point, the sound of the light rail at 2am in the station by the courthouse. You can research a city. You have to listen to a city. That was harder.
+
+## 2. Letting the protagonist be smaller than the book wanted him to be.
+
+The early drafts made Shawn Davidson a hero. Sharper, faster, more righteous than the book could hold. Every rewrite shaved him down. Made him more unsure, more complicit, more willing to work inside a machine he couldn't fully see. The fight was resisting the thriller reflex — the urge to let the lawyer win the room. Civic noir doesn't let anyone win the room. The room is bigger than everyone in it.
+
+## 3. Legal accuracy without legal exposition.
+
+The law in Contempt had to be right. Maryland circuit court procedure, defense motion practice, judicial appointment processes, courthouse security protocols circa 2006 — all of it had to survive a reader who works in the building. But the moment the novel starts explaining the law, it dies. Legal thrillers that stop to teach are legal thrillers that lose the reader. The fix was hiding the research inside behavior. A lawyer doesn't explain what a motion in limine is. He files one, and the judge's face tells you how it landed. That took hundreds of sentences to get right.
+
+## 4. The multi-POV problem.
+
+Three lead voices. Several supporting ones. Every chapter break a risk. The fight was making each POV earn its lane — different cadence, different grammar, different rhythm — without letting the book fragment. I rewrote entire chapters because the voice had drifted into a neighboring character's cadence. The book fails if the reader can't feel whose head they're in by the second paragraph. That's an invisible fight and a long one.
+
+## 5. The fight against perfection.
+
+This one never ends. A manuscript will never be done in the sense that nothing could improve. There's always one more pass, one more line that could land harder, one more scene that could be tighter. The fight is knowing when the book is finished enough — when more editing starts to sand off the texture instead of clarifying it. I'd rather publish a novel with the fingerprints visible than a novel polished into glass. Contempt is done because a reader needs to hold it. A book in a drawer isn't a book. That was the fight I had to win last.
+
+Five fights. One book. June 21.
+
+— LeRenyae`,
+  },
+  {
+    slug: "the-multi-pov-machine",
+    title: "The Multi-POV Machine",
+    category: "Thematic Essay",
+    date: "April 21, 2026",
+    excerpt: "No single character can see a system. That's the problem a civic noir novel has to solve on page one.",
+    content: `A system is too big for one pair of eyes.
+
+That's the problem Contempt had to solve before it could be written. A single protagonist, no matter how smart, how embedded, how well-placed — can only see what's in his lane. A defense attorney sees the defense. A reporter sees the story she's chasing. A detective sees the case he caught. None of them see the machine.
+
+But the machine is the whole point.
+
+## The Problem With One Pair of Eyes
+
+Civic noir runs on an assumption that a traditional thriller can't hold: the institution is bigger than any individual inside it. If you tell the story through one pair of eyes, the institution shrinks. It becomes background. It becomes set dressing. The reader trusts the protagonist, follows the protagonist, and whatever the protagonist doesn't see effectively doesn't exist.
+
+That's the wrong shape for this book.
+
+So Contempt moves. Shawn Davidson carries the trial, the inheritance, the name. Jordan carries the reporting, the records, the questions a lawyer can't ask. Han carries the street, the history, the rooms the system forgets about until it needs something from them. Other voices step in when the story needs a lane Shawn, Jordan, and Han can't enter.
+
+The reader sees what no character sees. That's the machine working.
+
+## The Cost
+
+There's a cost. Multi-POV is harder to hold. Every chapter break is a negotiation — the reader has to trust that the next voice earns its chapter, that the jump isn't a dodge. If the POVs blur, the book collapses into noise. If they sit too separately, the book becomes a collection of stories that share a zip code.
+
+The fix isn't structural. It's voice. Every POV in Contempt reads different — Shawn's sentences move like a cross-examination, Jordan's move like a notebook being filled in real time, Han's move like someone who's been in a room longer than anyone else and stopped explaining himself a long time ago. The reader learns the cadence. After a chapter or two, you know whose head you're in before the name is on the page.
+
+## Withholding As Architecture
+
+Multi-POV also lets the novel withhold the way a system withholds. One character knows a fact. Another character needs that fact. The reader holds both. The dramatic irony isn't a trick — it's the actual experience of being inside a city where information is distributed unevenly and who-knows-what is half the power structure. The reader feels that because they're holding what the characters can't share.
+
+## The Room The Book Builds
+
+Single-POV thrillers solve a puzzle. Multi-POV novels build a room.
+
+Contempt is a room. Baltimore, 2006. The doors keep opening. The voices keep trading off. No one in the room sees everything. The reader almost does — which is the closest any of us get to understanding how a city actually works.
+
+That's the machine. That's the book.
+
+— LeRenyae`,
+  },
   {
     slug: "publication-update-march-2026",
     title: "Contempt — Publication Update",
@@ -81,4 +219,4 @@ Fiction lets you trace that distance. Not to expose it — journalism does that.
 
 That's what Contempt is built to hold. Not a story about bad people in a broken system. A story about the system itself — how it recruits, how it records, and what happens to the names caught inside it when the structure starts to shift.`,
   },
-];
\ No newline at end of file
+];
-- 
2.43.0

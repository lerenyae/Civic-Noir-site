import type { Metadata } from "next";
import SoundtrackPlayer from "@/components/SoundtrackPlayer";

export const metadata: Metadata = {
  title: "Soundtrack",
  description: "Sounds of CONTEMPT — 18 tracks. The temperature of the pages in sound. Original novel soundtrack by LeRenyae Watkins.",
  openGraph: { title: "Sounds of CONTEMPT — Original Novel Soundtrack", description: "18 tracks composed for the novel Contempt. Character-driven. Chapter-mapped. By LeRenyae Watkins.", images: ["/covers/contempt-cover.png"] },
};

const tracks = [
  { num: "01", title: "Contempt", time: "3:44", character: "Shawn", spotifyId: "19mI0I7RtCszJezE8zZNJq", moment: "Title track. The weight of the word — legal, paternal, civic, self-inflicted. Every layer in one sound." },
  { num: "02", title: "Father's Don't Fade", time: "3:01", character: "Shawn / Leo", spotifyId: "74rRuKf03NRA8f8CTHe92s", moment: "Leo's collapse on the courthouse steps. The briefcase. The inheritance no one asked for." },
  { num: "03", title: "Leather and Blood", time: "3:18", character: "Shawn", spotifyId: "3NV56DU1qUPcFoyFQizKk9", moment: "The briefcase opened. Leo's case files, the Fedwire voucher, the IA file on Han. Clean on paper. Dirty in daylight." },
  { num: "04", title: "Crimson Fuse", time: "4:05", character: "Han / The City", spotifyId: "1rWtabjg6rJK97XigiDO7b", moment: "The case fractures. Sandtown entry. Gunfire on exit. Parker chained in a basement. The city detonating." },
  { num: "05", title: "All Falls Down", time: "1:59", character: "Antonio", spotifyId: "028j4iN2IhQVAUsk9gEj3g", moment: "The rally. The bottle. The shot. Garrick drops. Antonio is underneath. Everything collapses in under two minutes." },
  { num: "06", title: "Letterhead", time: "3:07", character: "The Firm", spotifyId: "6gq9qyVPMRHYnUQb0QGwQG", moment: "Davidson & Associates. The name on the door. The name on the debt. Institutional pressure in stereo." },
  { num: "07", title: "Cold Trail", time: "3:11", character: "Shawn", spotifyId: "6CXm0SlH8eVWxVg0ggeO0o", moment: "Jordan chasing the missing witness. Eve behind Red Orchid. The story that doesn't want exposure." },
  { num: "08", title: "No Sirens", time: "3:24", character: "Han", spotifyId: "5DpZqID0bthT71UAlTUk4Y", moment: "Han at the Iron Rail. The favors. The math between the people he loved and the system that held their debts." },
  { num: "09", title: "Maya", time: "3:51", character: "Maya", spotifyId: "530SoG6g08rulctVcVtPhF", moment: "The gallery. The divorce. The canvases face-down in glass. She doesn't argue — she observes. Her accuracy is the weapon." },
  { num: "10", title: "I Miss the Sun", time: "3:43", character: "Antonio", spotifyId: "32bvAMvrDCttL8IZDMgOKJ", moment: "Antonio in county. The fluorescent halo. Lights on all night. No window. Stillness cost less than guessing." },
  { num: "11", title: "Before I Walk In", time: "3:04", character: "Shawn", spotifyId: "1ey3bTzVmQqurL1PaAHfyv", moment: "The morning of opening statements. Briefcase burned cold in his palm. Leo's habits borrowing his hands." },
  { num: "12", title: "Glass Halo", time: "4:14", character: "Han", spotifyId: "4Bd28ZsdnWHylAcrstX5iM", moment: "TRUTH IS A BID carved in the wall. The metal sheet pretending to be a mirror. A boy learning to breathe where no one taught him how." },
  { num: "13", title: "Hold My Name", time: "4:31", character: "Antonio", spotifyId: "3BoA8qr8wQgcBRmK3oxkEG", moment: "Antonio's prayer from the inside. Don't let them make me something I ain't. The name is all he has left." },
  { num: "14", title: "Exits", time: "2:26", character: "Jordan", spotifyId: "5S8PpbW1jZKBhUM4iEd9Dx", moment: "Jordan in Central Booking. Charged. Bail denied. The documenter becomes the document." },
  { num: "15", title: "What It Cost", time: "3:27", character: "Shawn / Han / Jordan", spotifyId: "0j62G3M7AGHonMUmuShxzu", moment: "The reckoning. Three men who paid for the truth in different currencies. Nobody got change." },
  { num: "16", title: "Shame", time: "3:09", character: "Shawn", spotifyId: "2JtxYcrKoJR5FSxCLJw576", moment: "Shawn confronting what he became to win. The tools he used. The father he sounds like. The name he can't return." },
  { num: "17", title: "Case Closed", time: "3:08", character: "The System", spotifyId: "4MqEDjXQ9EQ4z4TPCp0LyK", moment: "The split verdict. The system doesn't give clean wins. It adjusts. Paperwork and silence." },
  { num: "18", title: "Charm City", time: "3:24", character: "Baltimore", spotifyId: "4bCVahqhTHsRPiHLLPKLiY", moment: "The closer. The city wakes up the same way it went to sleep. Cranes on the harbor. Domino burns red. Baltimore doesn't apologize." },
];

export default function SoundtrackPage() {
  return <SoundtrackPlayer tracks={tracks} />;
}

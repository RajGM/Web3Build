import ImageUploader from "@components/profileImage";
import CalendarLink from "@components/CalendarLink";
import { Social } from "@components/Social";

export default function UserProfilePage({ user, posts }) {
    return (
        <div className="middle fullHeight">
            <ImageUploader />
            <div style={{textAlign:'center'}}>
                <h2>Google Calendar Links</h2>
                <h5>Import to Google Calendar</h5>
            </div>
            <CalendarLink link={"Hackathon"} text={"https://calendar.google.com/calendar/u/0?cid=NzU5ZDcxOGZlY2Y5N2MzNWVkMGU4OTYyYTg5M2Q3YTM1YWYwOGM3MDA0NTg5MDhiYWE0NThjODdjODBjYTJjNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"} />
            <CalendarLink link={"Grants"} text={"https://calendar.google.com/calendar/u/0?cid=NjBiMDI5OTI0MDljYmQ2MTIyYzNkN2QxMjliMGM5NjNiNTIxNGUyNmNiMzZlZjlmYWYzZDUyMjMwNTY0NWI0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"} />
            <CalendarLink link={"Conferences"} text={"https://calendar.google.com/calendar/u/0?cid=N2Q2YTZjMmI4M2M5MTU0MWUzNjU5MGNiNzEyZjU0YzA4N2NjMTVhMjljNDJlOWUxMGRiMDczOTdlNGU5MDY5ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"} />
            <CalendarLink link={"Internships"} text={"https://calendar.google.com/calendar/u/0?cid=NjU4OGMzMzE3NWI0ZWY4NjY4ZDExNGIyNjc5NzlhMzYxYmU0Y2Q2OTgxNjM2MWI3MzAzMTJlM2QzZjQxNjk2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"} />
            
            <Social />
        </div>
    );
}
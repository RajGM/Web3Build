
export default function UserProfilePage({ user, posts }) {
    return (
        <div className="middle fullHeight">
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=759d718fecf97c35ed0e8962a893d7a35af08c700458908baa458c87c80ca2c5%40group.calendar.google.com&ctz=Asia%2FKolkata" style={{width:"800px", height:"600px"}}></iframe>
            </div>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=6588c33175b4ef8668d114b267979a361be4cd69816361b730312e3d3f416965%40group.calendar.google.com&ctz=Asia%2FKolkata" style={{width:"800px", height:"600px"}}></iframe>
            </div>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=60b02992409cbd6122c3d7d129b0c963b5214e26cb36ef9faf3d522305645b4c%40group.calendar.google.com&ctz=Asia%2FKolkata" style={{width:"800px", height:"600px"}}></iframe>
            </div>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=7d6a6c2b83c91541e36590cb712f54c087cc15a29c42e9e10db07397e4e9069f%40group.calendar.google.com&ctz=Asia%2FKolkata" style={{width:"800px", height:"600px"}}></iframe>
            </div>
        </div>
    );
}
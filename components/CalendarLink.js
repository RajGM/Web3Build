import ClickToCopy from '@components/ClickToCopy';

export default function CalendarLink({ link, text }) {

    return (
        <div className='calendarDiv'>
            <div class="container" >
                <div class="content" >
                    {link}
                </div>
            </div>
            <div class="container" >
                <div class="content" style={{textAlign:'right'}}>
                    <ClickToCopy text={text} />
                </div>
            </div>
        </div>
    );
}
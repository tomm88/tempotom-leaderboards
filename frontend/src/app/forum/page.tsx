import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api';

export default function Page() {
    const footer = (
        <Button
            label="Reply"
            icon={PrimeIcons.REPLY}
        />
    )
    return (
        <div className='p-4'>
            <Card
                title="Example Post"
                subTitle="Ashen Deimos 9/20/2025"
                footer={footer}
                pt={{
                    content: {
                        className: "border-t-1"
                    },
                    footer: {
                        className: "flex justify-end"
                    }
                }}
            >
                <p className='p-0'>
                    Hey everyone, just wanted to get thoughts on how this looked.
                </p>
            </Card>
        </div>
    );
}
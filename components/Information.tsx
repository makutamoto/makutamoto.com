import React from 'react'

export interface InformationProps {
    title: string
    children: JSX.Element[],
}

const Information: React.FC<InformationProps> = ({ title, children }) => (
    <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>
        <div>
            ・{title}
        </div>
        <div style={{ marginTop: '1rem', padding: '0.5rem' }}>
            {children}
        </div>
    </div>
)
export default Information

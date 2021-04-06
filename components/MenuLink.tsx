import React from 'react'
import Link from 'next/link'

export interface MenuLinkProps {
    color: string
    title: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ color, title }) => (
    <div>
        <span style={{ color, marginRight: '1rem' }}>
            ●
        </span>
        <Link href="/" passHref>
            <a>{title}</a>
        </Link>
    </div>
)
export default MenuLink

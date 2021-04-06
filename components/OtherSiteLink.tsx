import React from 'react'

export type OtherSiteLinkProps = Omit<React.ComponentProps<'a'>, 'target' | 'rel'>

const OtherSiteLink: React.FC<OtherSiteLinkProps> = (props) => (
    <a {...props} target="_blank" rel="noreferrer" />
)
export default OtherSiteLink

import Image from 'next/image'

import OtherSiteLink from '../components/OtherSiteLink'
import Information from '../components/Information'

export const Home = (): JSX.Element => (
    <div style={{ width: '100%', height: 'calc(100% - 2rem)', padding: '1rem 0', background: 'url("/images/makutamoto-name.png")' }}>
        <h1 style={{ textAlign: 'center' }}>幕田元のホームページ</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ width: '350px', margin: '0 4px' }}>
                <Image src="/images/makutamoto.png" width={350} height={414} />
                <div style={{ padding: '1.5rem' }}>
                    幕田元 (まくたもと)<br />
                    生年月日 2002年9月20日<br />
                    血液型 A型<br />
                    <OtherSiteLink href="https://github.com/makutamoto">
                        GitHub
                    </OtherSiteLink>
                </div>
                <p>
                    If you have any enquiries regarding my projects, please do not hesitate to contact me through the following twitter account.
                </p>
                <p>
                    twitter:
                    <OtherSiteLink href="https://twitter.com/makutamoto">
                        @makutamoto
                    </OtherSiteLink>
                </p>
                <p>
                    所属:<br />
                    大分工業高等専門学校
                </p>
            </div>
            <div style={{ width: '350px' }}>
                <div style={{ textAlign: 'center' }}>
                    ★★★　最新情報　★★★
                </div>
                <div style={{ margin: '8rem 0' }}>
                    <hr />
                    <Information title="AtCoder">
                        <OtherSiteLink href="https://twitter.com/makutamoto">
                            「Makutamoto」
                        </OtherSiteLink>
                        <div style={{ color: 'red' }}>
                            2020年3月1日スタート<br />
                            毎週土曜よる9時〜
                        </div>
                    </Information>
                    <hr />
                    <Information title="制作物">
                        <div>
                            <OtherSiteLink href="https://mojacoder.app">
                                「MojaCoder」
                            </OtherSiteLink>
                            <div>
                                2021年1月5日公開
                            </div>
                        </div>
                        <div style={{ margin: '2rem 0' }}>
                            <OtherSiteLink href="https://github.com/makutamoto/race-game">
                                「レースゲーム」
                            </OtherSiteLink>
                            <div>
                                2020年3月3日公開
                            </div>
                        </div>
                        <div>
                            <OtherSiteLink href="https://github.com/makutamoto/ttygraph">
                                「ttyGraph」
                            </OtherSiteLink>
                            <div>
                                2019年3月17日公開
                            </div>
                        </div>
                    </Information>
                    <hr />
                </div>
            </div>
        </div>
    </div>
)

export default Home

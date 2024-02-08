import { Layout } from 'antd';

import { __APP_NAME__ } from '@/lib/constants';

const { Footer } = Layout;

type FooterCmpProps = {

}

const FooterCmp: React.FC<FooterCmpProps> = () => {
  return (
    <Footer className="text-center">
      © {new Date().getFullYear()} {__APP_NAME__} - All Rights Reserved. Created by &nbsp;
      <a className='underline' href="https://github.com/najathi" target='_blank' rel="noreferrer">@najathi</a>
    </Footer>
  );
}

export default FooterCmp;
import { ReactNode } from 'react';

export interface RouterDomProps {
  path?: string;
  protected?: boolean;
  component: ReactNode | any;
}

import Header from '@/components/Header';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({ children }: LayoutProps) {
  return (
    <BaseTemplate header={<Header />}>
      <div className="py-5 text-xl [&_p]:my-6">{children}</div>
    </BaseTemplate>
  );
}

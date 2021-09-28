import Link from 'next/link';
import { formatMoney } from '../../utils/formaters';

export const Header = () => {

  const totalAmountCollected = 3;
  const numberOfProjects = 30;

  return (
    <nav className="navbar is-primary is-fixed-top">
      <div className="navbar-brand">
        <Link href="/" passHref={true}>
          <a className="navbar-item is-size-4 has-text-weight-bold">Catarsinho</a>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-text-weight-bold">
          {numberOfProjects} itens
        </div>
        <div className="navbar-item has-text-weight-bold">
          Total {formatMoney(totalAmountCollected)}
        </div>
      </div>
    </nav>
  );
}
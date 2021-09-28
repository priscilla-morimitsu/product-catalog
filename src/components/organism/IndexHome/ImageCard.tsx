import Link from 'next/link';
import { formatMoney, formatPercent } from "../../../utils/formaters";
import { Image } from '../../atom/Image';
import { ProgressBar } from "../../atom/ProgressBar";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  goal: number;
  collected: number;
};

export const ImageCard = ({ id, title, imageUrl, goal, collected }: CardProps) => {
  const percent = (collected * 100) / goal;
  return (
    <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile" v-for="project in projects">
      <div className="card">
        <div className="card-image is-clickable">
          <Link href={`/${id}`} passHref={true}>
            <Image className="image is-16by9" src={imageUrl} alt={title}/>
          </Link>
        </div>

        <div className="card-content">
          <div className="media-content">
            <p className="title is-4 is-clipped">
              <Link href={`/${id}`} passHref={false}>
                <a className="has-text-dark is-capitalized">{title}</a>
              </Link>
            </p>
            <ProgressBar value={percent} />
          </div>

        </div>
        <footer className="card-footer">
          <p className="card-footer-item has-text-weight-bold">{formatPercent(percent)}</p>
          <p className="card-footer-item has-text-centered">
            <span className="has-text-weight-bold">
              {formatMoney(collected)}
              <br/>
              <span className="has-text-weight-normal">arrecadados</span>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
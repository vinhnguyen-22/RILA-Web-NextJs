import { PATHS } from '@/app/constants';
import { DownLoadIcon } from '@/icons/download';
import { Report } from '@/types/cms';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from '../common/Chip';

type ReportCardProps = Report;

const ReportCard: FC<ReportCardProps> = ({ cover, id, published, slug, tags, title }) => {
  const reportSlug = `${PATHS.REPORT}/${slug}`;
  return (
    <Link key={slug} className="" href={reportSlug}>
      <div
        className="relative text-white p-[20px] md:h-[200px] rounded-lg border-black bg-center bg-cover"
        style={{ backgroundImage: `url('${cover}')` }}
      >
        <div className="absolute right-[22px] bottom-[22px]">
          <DownLoadIcon />
        </div>

        <b className="w-full text-5xl tracking-[0.03em] flex items-center">{title}</b>
        <div className=" w-full text-lg tracking-[0.03em] flex items-center mb-3">Brand Report</div>
        <div className=" h-[30.77%] w-[28.14%]">
          {tags && tags.length > 0 && (
            <div className="flex flex-row gap-2 flex-wrap ">
              {tags &&
                tags.slice(0, 3).map((tag: any) => {
                  return (
                    <Chip
                      key={tag.name}
                      style={{ backgroundColor: `var(--color-chip-${tag.color})` }}
                    >
                      {tag.name}
                    </Chip>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ReportCard;

import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  name,
  body,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-medium">
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
    <h3 className="mb-4 font-normal">{body}</h3>
  </li>
);

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Certification
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
               <ListItem  
                    name={`HackerRank all 3 SQL certificates - 2024`}
                    body={`Completed all 3 SQL Certificates: Basic, Intermediate and Advanced`}
                    link={`https://drive.google.com/drive/folders/1n0zR0uIy9mtph_k_rmUV15FDansa38zt`}
                  />
                <ListItem  
                    name={`TCA Data Analyst Certificate - 2024`}
                    body={`Completed professional Data-Analyst course (SQL, Python, Power-BI & Excel) from TCA Training Academy`}
                    link={`https://drive.google.com/drive/folders/1vxCqY6uZ_XbZKP8oaeYcxPoKE-UPiMM_`}
                  />
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

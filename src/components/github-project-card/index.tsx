import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  console.log('GithubProjectCard', githubProjects);
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };
  githubProjects = [{ name: 'Super store sales analysis dashboard', description: 'Created a comprehensive dashboard using Power BI to analyse sales trends, profit margins, and inventory efficiency', stargazers_count: `5`, forks_count: `1`, language: 'Power BI', html_url: 'https://drive.google.com/drive/folders/1m23N8Oh2JGtuijSZmzhmHVNnmeM7L7Af' },
    { name: 'HR dashboard for employee attrition', description: 'Built an interactive Power BI dashboard to identify factors contributing to employee attrition', stargazers_count: `5`, forks_count: `1`, language: 'Power BI', html_url: 'https://drive.google.com/drive/folders/1tHgJbI4znOB4Ltl47-hjOsBPmDE86bgO' },
    { name: 'Credit card transaction analysis dashboard', description: 'Analysed transaction data using Python (Pandas, Matplotlib) to detect patterns and anomalies', stargazers_count: `5`, forks_count: `1`, language: 'Python(Pandas, Matplotlib)', html_url: 'https://drive.google.com/drive/folders/1GTgjmAlS4FK_66Q6GyBXvK9vyZlCDZKc' },
    { name: 'Diwali sales analysis for personalised campaigning', description: 'Performed customer segmentation based on Gender, Age, City, Job-category, marital status, etc using Pandas.', stargazers_count: `4`, forks_count: `1`, language: 'Python(Pandas, Matplotlib)', html_url: 'https://drive.google.com/drive/folders/12R66_wQV6SRrX-jqH_8vYvbA4dBPuMa9' },
    { name: 'Potential customer prediction model for an educational company', description: 'Developed a machine learning model using Python to predict potential customers for an educational company', stargazers_count: `5`, forks_count: `1`, language: 'Python(Pandas, Matplotlib)', html_url: 'https://drive.google.com/drive/folders/1CM88m_rIgeQIKur815JkwfVPoulL663D' },

  ]
  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticsId) {
              ga.event('Click project', {
                project: item.name,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center truncate">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <span>{item.name}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 opacity-60"
                  style={{ backgroundColor: `orange` }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;

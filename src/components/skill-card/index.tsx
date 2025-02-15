import { skeleton } from "../../utils";

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: "w-16", heightCls: "h-4", className: "m-1" })}
        </div>
      );
    }

    return array;
  };
  skills = [
    `SQL`,
    `Python`,
    `Numpy`,
    `Pandas`,
    `Matplotlib`,
    `MySQL`,
    `Excel`,
    `PowerPoint`,
    `PyCharm`,
    `Jupyter`,
    `Notebook`,
    `Visual Studio Code`,
    `People Management`,
    `leadership`,
    `adaptability`,
  ];
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: "w-32", heightCls: "h-8" })
            ) : (
              <span className="text-base-content opacity-70">Skills</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-start">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg">Languages:</p>
              <div className="flex flex-wrap gap-2">
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  SQL
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Python
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  EDA
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg">Frameworks:</p>
              <div className="flex flex-wrap gap-2">
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Numpy
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Pandas
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Matplotlib
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg">Tools:</p>
              <div className="flex flex-wrap gap-2">
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  MySQL
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  PowerBI
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Excel
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg">Platforms:</p>
              <div className="flex flex-wrap gap-2">
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  PyCharm
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Jupyter Notebook
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Visual Studio Code
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg">Soft Skills:</p>
              <div className="flex flex-wrap gap-2">
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  People Management
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Leadership
                </div>
                <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                  Leadership
                </div>
              </div>

            </div>
            {/* {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    {skill}
                  </div>
                ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

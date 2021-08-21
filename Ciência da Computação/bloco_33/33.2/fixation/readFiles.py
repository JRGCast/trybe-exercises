import csv
path = 'jobs.csv'

def read(path):
    """Reads a file from a given path and returns its contents
    Parameters
    ----------
    path : str
        Full path to file
    Returns
    -------
    list
        List of rows as dicts
    """
    result = []
    with open(path, 'r') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=",", quotechar='"')
        for row in reader:
            result.append(row)
    return result

def get_max_salary(path):
    """Get the maximum salary of all jobs

    Must call `read`

    Parameters
    ----------
    path : str
        Must be passed to `read`

    Returns
    -------
    int
        The maximum salary paid out of all job opportunities
    """
    reader = read(path)
    # max_salary_list = [ 
    #   int(row["max_salary"]) for row in reader if (row["max_salary"] not in (None, ""))
    #         ]
    print(reader[5])

get_max_salary(path)

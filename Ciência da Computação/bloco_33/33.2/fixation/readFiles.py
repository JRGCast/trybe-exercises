import csv
path = 'jobs.csv'
results = []


with open(path, 'r') as file:
        reader = csv.DictReader(file)
        header, *data = reader
        line_count = 0
        for row in data:
          if row["industry"] not in results and row["industry"] not in (None, ""): 
            results.append(row["industry"])
          line_count += 1
    # print(f"Unique industries: finished analyzing {line_count} rows")
print(results[-5])

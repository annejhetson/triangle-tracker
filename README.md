CSV Uploader
------------

- Uploading a list of potential leads
By selecting `can_be_contacted`, user can upload a CSV that contains “Company”, “Website”, “Title”, “First Name”, “Last Name” and “Email” columns.
We only save new companies to our database. The company endings(e.g. inc and ltd) will be removed, and the name will get titlecased and run through Crunchbase. If Crunchbase result found, company info will get updated.

- Changing existing companies' status
By selecting `do_not_contact`, `contacted` or `worked_with`, user can upload a CSV file that contains “Company” column, and it will update their status in the database

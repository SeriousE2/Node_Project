
# Node Practice App

This application was design to use NASA open API 


## API Reference

#### Retrieve a list of Asteroids based on their closest approach date to Earth. GET

```http
  Neo - Feed
https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `DEMO_KEY` | **Required**. Your API key |
| `start_date` | `YYYY-MM-DD` | `Starting date for asteroid search`|
| `end_date` | `string` | `Ending date for asteroid search` |




## Authors

- [@SeriousE2](https://github.com/SeriousE2)


## Deployment

To deploy this project run

```bash
  npm start
```
```bash
  npm run serve
```


## Documentation

[api.nasa.gov](https://api.nasa.gov/)

[nasa sample data](https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY)


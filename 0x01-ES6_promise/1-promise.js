export default function getResponceFromAPI(success)
{
    return new Promise((reslove, reject) => {
        if (success)
        {
            resolve(
                {
                    status:200,
                    body:'success',
                }
            )
        }
        reject(new Error('The fake API is not working currently'));
    })
}
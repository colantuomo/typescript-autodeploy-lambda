# Lambda using typescript
This template aims to facilitate the creation of lambdas using TypeScript, already configuring auto-deploy and other details such as `build` and `zip` of the application to be sent to AWS.

## How to use?
You can develop your code normally within the `src` folder as that's where `tsup` will look to perform the `build`.

To use the **auto-deploy** pipeline, there are some environment variables and secrets that need to be filled in with your information:

Within **settings** in your repository, insert the **variables**:
- `AWS_LAMBDA_NAME`
- `AWS_LAMBDA_REGION`

and the **secrets**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

And after everything is filled in correctly, it should work.

## How to obtain the Secrets?
You should go to `IAM` in the AWS console to create a new user, give the **necessary permissions to manipulate lambdas**, and after creating it, generate an **access key**. With that, you just need to fill in the **secrets** with the values you generated from the keys.

## Contribution
The idea of the template is to facilitate and help with the creation of lambdas using TypeScript, feel free to contribute with improvements or corrections.
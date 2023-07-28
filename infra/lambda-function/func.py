import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    try:
        response = dynamodb.update_item(
            TableName='ContadorVisitas',
            Key={
                'id': {'S': 'visitCounter'}
            },
            ExpressionAttributeNames={
                '#V': 'valor',
            },
            ExpressionAttributeValues={
                ':inc': {'N': '1'}
            },
            UpdateExpression='ADD #V :inc',
            ReturnValues="UPDATED_NEW"
        )
    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'Erro ao atualizar o contador: {str(e)}',
            'headers': {
                'Access-Control-Allow-Origin': 'https://curriculum.luanlouzada.com'
            }
        }
    return {
        'statusCode': 200,
        'body': json.dumps(f'{response["Attributes"]["valor"]["N"]}'),
        'headers': {
            'Access-Control-Allow-Origin': 'https://curriculum.luanlouzada.com'
        }
    }
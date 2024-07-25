// swaggerDef.js
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API',
        version: '1.0.0',
        description: 'ExpressJS API with Swagger documentation',
    },
    servers: [
        {
            url: 'http://localhost:3000', // Your server URL
            description: 'Development server',
        },
    ],
    "paths": {
        "/users/add": {
            "post": {
                "summary": "Add User",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "email": {
                                        "type": "string"
                                    },
                                    "password": {
                                        "type": "string"
                                    }
                                },
                                "example": {
                                    "name": "John Doe",
                                    "email": "jhon@gmail.com",
                                    "password": "12345678"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users/list": {
            "get": {
                "summary": "User List",
                "parameters": [
                    {
                        "name": "page",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "integer",
                            "default": 0
                        },
                        "description": "User pagination page number"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        },
                                        "result": {
                                            "type": "object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users/delete/{id}": {
            "delete": {
                "summary": "User Delete",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "default": 0
                        },
                        "description": "ID of the item to be deleted"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        },
                                        "result": {
                                            "type": "object"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Item not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "error": {
                                            "type": "string"
                                        }
                                    },
                                    "example": {
                                        "error": "Item with ID 12345 not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users/update/{id}": {
            "put": {
                "summary": "User updated",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "default": 0
                        },
                        "description": "ID of the item to be deleted"
                    }
                ],
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    }
                                },
                                "example": {
                                    "name": "John Doe"
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        },
                                        "result": {
                                            "type": "object"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Item not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "error": {
                                            "type": "string"
                                        }
                                    },
                                    "example": {
                                        "error": "Item with ID 12345 not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

module.exports = swaggerDefinition;
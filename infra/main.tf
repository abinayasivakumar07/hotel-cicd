resource "azurerm_resource_group" "rg" {
  name     = "rg-${var.project}"
  location = var.location
}

resource "random_string" "suffix" {
  length  = 5
  upper   = false
  special = false
}
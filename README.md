
Client Data Dashboard

* Client Dashboard for monitoring data from multiple client databases (e.g., kpsindia_data_services, udgoticonsultancy_data_services, etc.). It includes user authentication, password reset via email, dynamic data querying, Excel export, and date filtering.


## Overview

* Framework: Flask (Python web framework)
* Database: MySQL via SQLAlchemy + PyMySQL
* Authentication: Email-based login with hashed passwords

Features:
* Login / Logout
* Forgot Password (with email token)
* Dashboard with real-time counts
* Table data viewing (via AJAX)
* Excel report download
* Date filtering (Today, This Week, Custom, etc.)
## IMPORTS & CORE SETUP

#  CODE
* from flask import Flask, render_template, send_file, request, jsonify, abort, redirect, url_for, session, flash
* import pandas as pd
* import sqlalchemy
* from io import BytesIO
* import re
* from openpyxl.utils.exceptions import IllegalCharacterError
* from datetime import datetime, timedelta
* from werkzeug.security import generate_password_hash, check_password_hash
* import logging

# Explanation:
* Standard Flask utilities for routing, sessions, templates.
* pandas for handling SQL results as DataFrames.
* SQLAlchemy for database connection.
* BytesIO for in-memory Excel file generation.
* werkzeug.security for secure password hashing.
* logging for error tracking.

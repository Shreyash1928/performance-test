# Performance Testing using Apache JMeter

## Objective
Automate performance testing of a web application using Apache JMeter.

## Tool Used
- Apache JMeter 5.6.3

## Test Description
A load test was created using JMeter to simulate multiple users accessing an HTTP endpoint.
The test measures response time, throughput, and error rate.

## Execution
The test was executed in non-GUI mode using:
jmeter -n -t performance_test.jmx -l results.jtl -e -o report

## Results
Performance results were generated as an HTML dashboard and screenshots were captured.
# performance-test

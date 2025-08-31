var areaChartOptions = {
            series: [{
                name: 'Course Progress',
                data: [44, 55, 41, 67, 51, 73, 86]
            }, {
                name: 'Study Hours',
                data: [35, 49, 35, 51, 43, 64, 67]
            }],
            chart: {
                height: 300,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            colors: ["#246dec", "#20c997"],
            stroke: {
                curve: 'smooth',
                width: 3
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.1,
                }
            },
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
            markers: {
                size: 5
            },
            yaxis: {
                title: {
                    text: 'Progress %',
                },
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + "%";
                        }
                        return y;
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 250
                    }
                }
            }]
        };

        var areaChart = new ApexCharts(document.querySelector("#area_chart"), areaChartOptions);
        areaChart.render();

        // Handle window resize for charts
        window.addEventListener('resize', function() {
            barChart.updateOptions({
                chart: {
                    height: window.innerWidth <= 480 ? 250 : 300
                }
            });
            areaChart.updateOptions({
                chart: {
                    height: window.innerWidth <= 480 ? 250 : 300
                }
            });
        });

        // Sidebar toggle for mobile/tablet
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // Close sidebar when clicking overlay
        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        // Close sidebar when clicking a menu item (on mobile)
        document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 1024) closeSidebar();
            });
        });

        // Optional: Close sidebar on resize if screen is large
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                document.getElementById('sidebar').classList.remove('active');
                document.querySelector('.sidebar-overlay').classList.remove('active');
            }
        });


